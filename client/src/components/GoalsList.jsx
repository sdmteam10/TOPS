import React, { Component } from 'react'
import axios from 'axios'

//This is our test goals page now


class GoalsList extends Component {
    
    state = {
        goals: [], //init goals
        acts: [],  //init activities JSON.parse(localStorage.getItem('acts'))?JSON.parse(localStorage.getItem('acts')):
        act: {},   //init a single activity object
        currentGoal: {}, //Currently selected target
        goalActs: JSON.parse(sessionStorage.getItem('goalActs'))?JSON.parse(sessionStorage.getItem('goalActs')):[], //The activity objects corresponding to the currently selected target 
        goalsActs: [], //A temp activity objects list
        status: false, //save status for checkedbox checked value
        recoActIdList: [],   //storge activities number list
        checkboxStatus: {}, //localstorage reload goals checkboxes status
        goalActsItems: [],
        count: 0
    }   



    componentDidMount() {
        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,})

        const goalActsItems = {...sessionStorage};
        this.setState({goalActsItems,})
        
        
        axios.get(`/routes/api/goals/`)
            .then(res => {
                this.setState({ goals: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`/routes/api/activities/`)
            .then(res => {
                this.setState({ acts: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    removeDuplicate(originalArray) {
        let unique = new Set(originalArray)
        return [...unique]
      }
    
    removeDuplicateOBJ(arr) {
        let unique = arr.filter( (ele, ind) => ind === arr.findIndex( elem => elem.name === ele.name))
        return unique;
    }

    findAct(activityNumber) {
        let act = {}
        for (let i of this.state.acts) {
            if (i.activityNumber === activityNumber) {
                act = i
            }
        }
        return act
    }

    async handler(goalNumber) {
        
        await this.setState({
            currentGoal: {},
            recoActIdList: [],
            goalActs: []
        })

        for (let i of this.state.goals) {
            if (i.goalNumber === goalNumber) {
                this.setState({ currentGoal: i })
            }
        }
        this.setState({
            recoActIdList: this.state.currentGoal.goalActivities
        })
    }

    async getGoalChecked(e){
        this.state.count ++
        //load goal checkboxes status into localstorage
        if (e.target.type === 'checkbox') {
            localStorage.setItem( e.target.id, e.target.checked )
        }
        
        //load saved checkbox status after click goal
        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,})

        //load saved activities after click goal
        const goalActsItems = {...sessionStorage};
        this.setState({goalActsItems,})
        

        if (e.target.checked === true) {
            await this.setState ({status: true})
        }else if(e.target.checked === false){
            await this.setState ({status: false})
        }

        //First time goal click after reloading, concat previous session states to current goalsActs
        if ((goalActsItems["goalActs"]) && this.state.count===1 && this.state.status === true){

            JSON.parse(goalActsItems["goalActs"]).map(actItem => {
                return (this.state.goalsActs.push(actItem))
            })
            console.log("this is true, first pushing and loading",this.state.goalsActs) 
        } else if ((goalActsItems["goalActs"]) && this.state.count===1 && this.state.status === false){
            JSON.parse(goalActsItems["goalActs"]).map(actItem => {
                return (this.state.goalsActs.push(actItem))
            })

            for (let i of this.state.recoActIdList) {
                let index = this.state.goalsActs.findIndex(e => e === this.findAct(i))
                this.state.goalsActs.splice(index, 1) 
            }

            console.log("this is false, first pushing, splicing and loading",this.state.goalsActs) 
        }

        
        if (this.state.status){
            for (let i of this.state.recoActIdList) {   
                this.state.goalsActs.push(this.findAct(i)) 
                console.log("This is true and push",this.state.goalsActs)
            } 
        } else{
            for (let i of this.state.recoActIdList) {
                let index = this.state.goalsActs.findIndex(e => e === this.findAct(i))
                this.state.goalsActs.splice(index, 1) 
            }
            
        }


        //remove duplicates in goalsActs, save to goalActs and save to sessionStorage after each click
        await this.setState({
            goalActs: this.removeDuplicateOBJ(this.state.goalsActs)
        }, () => {
            sessionStorage.setItem("goalActs", JSON.stringify(this.state.goalActs))
        })   
        
    }

    async getActChecked(e){
        if (e.target.type === 'checkbox') {
            localStorage.setItem( e.target.id, e.target.checked )
        } // click to add to session storage
        
        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,}) //click to update session storage

    }

    async emptyBind(event){
    }


    render() {

        return (
            <>
            {/* Goals List */}
            <div className='container'>
                {/* removing this w-75 makes more responsive on a phone size */}
                <div className="w-75 me-auto mt-md-5 font-monospace" style={{ height: '500px' }}>
                <br />

                    <div className='row'> 
                        
                        <div className='col text-primary' onChange={this.emptyBind.bind(this)}>
                            <h5>Goals:</h5>
                            <br />
                        {
                            //d-grid gap-0
                            this.state.goals.map(goal => (
                                <div className=" d-grid gap-0 btn-group" role="group" aria-label="Basic checkbox toggle button group" key={goal._id}>
                                    <input type="checkbox" className="btn-check" id={goal.goalNumber} value={goal.name} onChange={event => this.getGoalChecked(event)} checked={this.state.checkboxStatus[goal.goalNumber] === "true" ? true : false }/>
                                    <label className="btn btn-outline-primary btn-sm" htmlFor={goal.goalNumber} onClick={() => this.handler(goal.goalNumber)}>{goal.name}</label>
                                    <div style={{ height: '10px' }}></div>
                                </div>
                            ))
                        }
                        </div>
                         
                        
                        <div className="col text-primary" style={{ width: "500px", height: '600px' }}>
                            <h5>Activites:</h5>
                            <br />
                            <div >
                                {
                                        this.state.goalActs.map(goalAct => (  
                                            <div className="d-grid gap-0 btn-group" role="group" aria-label="Basic checkbox toggle button group" key={goalAct._id}>
                                                <input type="checkbox" className="btn-check" id={goalAct._id} value={goalAct.name} onChange={event => this.getActChecked(event)} checked={this.state.checkboxStatus[goalAct._id] === "true" ? true : false}/>
                                                <label className="btn btn-outline-primary btn-sm" htmlFor={goalAct._id}>{goalAct.name}</label>
                                                <div style={{ height: '10px' }}></div>
                                            </div>
                                    ))
                                }
                            </div>   
                        </div> 

                        
                        

                        
                    </div>
                </div>
       
            </div>
        </>
                
                   
        )
    }
}

export default GoalsList