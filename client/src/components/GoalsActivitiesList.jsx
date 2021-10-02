import React, { Component } from 'react'
import axios from 'axios'
import Draggable from 'react-draggable';
import CTE from "react-click-to-edit"



class GoalsActitivitiesList extends Component {
    
    state = {
        goals: [], //init goals
        acts: [],  //init activities
        act: {},   //init a single activity object
        currentGoal: {}, //Currently selected target
        goalActs: JSON.parse(localStorage.getItem('goalActs'))?JSON.parse(localStorage.getItem('goalActs')):[],   //The activity objects corresponding to the currently selected target JSON.parse(sessionStorage.getItem('goalActs'))?JSON.parse(sessionStorage.getItem('goalActs')):
        goalsActs: [], //A temp activity objects list
        status: false, //save status for checkedbox checked value
        recoActIdList: [],   //storge activities number list
        checkboxStatus: {}, //localstorage reload goals checkboxes status
        // actCheckboxStatus: {} //sessionstorage reload goal-acts checkboes status
    }   

    // componentWillReceiveProps(){
    //     let params = qs.parse(nextProps.location.search.substring(1));
    //     this.setState({goalActs: params.goalActs});
    // }



    componentDidMount() {
        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,})

        // const actCheckboxStatus = {...sessionStorage};
        // this.setState({actCheckboxStatus,})
        
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
            goalActs:[],
            //***This is the problem***//
            // goalsActs: JSON.parse(localStorage.getItem('goalActs'))?JSON.parse(localStorage.getItem('goalActs')):[]
            goalsActs:[]
        })

        //***This is the problem***//
        this.state.goalActs = this.removeDuplicate(this.state.goalsActs)

        for (let i of this.state.goals) {
            if (i.goalNumber === goalNumber) {
                this.setState({ currentGoal: i })
            }
        }
        this.setState({
            recoActIdList: this.state.currentGoal.goalActivities
        })
    }


    async getActChecked(e){
        if (e.target.type === 'checkbox') {
            localStorage.setItem( e.target.id, e.target.checked )
        } // click to add to session storage
        
        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,}) //click to update session storage

    }

    async getGoalChecked(e){
        
        if (e.target.type === 'checkbox') {
            localStorage.setItem( e.target.id, e.target.checked )
        } // click to add to local storage

        const checkboxStatus = {...localStorage};
        this.setState({checkboxStatus,})

        if (e.target.checked === true) {
            await this.setState ({status: true})
        }else if (e.target.checked === false){
            await this.setState ({status: false})
        }

        if (this.state.status){
            for (let i of this.state.recoActIdList) {   
                this.state.goalsActs.push(this.findAct(i)) 
            } 
        } else{
            for (let i of this.state.recoActIdList) {
                let index = this.state.goalsActs.findIndex(e => e === this.findAct(i))
                this.state.goalsActs.splice(index, 1) 
            }
            
        }

        await this.setState({
            goalActs: (this.removeDuplicate(this.state.goalsActs))
        }, () => {
            localStorage.setItem("goalActs", JSON.stringify(this.state.goalActs))
        })

        
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
                         
                        
                        <div className="col text-primary"  onChange={this.emptyBind.bind(this)} style={{ width: "500px", height: '600px' }}>
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

                        <div className="col text-dark" style={{ width: "500px", height: '600px' }}>
                            <Draggable>
                                <div className="card text-dark bg-light mb-3" style={{"maxwidth": "18rem"}}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        {/* This text may be changed to a value like actChecked, loading from state */}
                                        <h5 className="card-title">Light card title</h5>
                                        <CTE className="card-text" initialValue="Click to write description"></CTE>
                                    </div>
                                </div>
                            </Draggable>
                            <Draggable>
                                <div className="card text-dark bg-info mb-3" style={{"maxwidth": "18rem"}}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Info card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </Draggable>
                        </div>

                        
                    </div>
                </div>
       
            </div>
        </>
                
                   
        )
    }
}

export default GoalsActitivitiesList