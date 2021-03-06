import React, { Component } from 'react'
import axios from 'axios'
import { Switch } from 'antd';
import ActivityCard from './ActivityCard';


class GoalsActitivitiesList extends Component {
    state = {
        goals: [], //init goals
        acts: [],  //init activities JSON.parse(localStorage.getItem('acts'))?JSON.parse(localStorage.getItem('acts')):
        act: {},   //init a single activity object
        currentGoal: {}, //Currently selected target
        goalActs: JSON.parse(sessionStorage.getItem('goalActs')) ? JSON.parse(sessionStorage.getItem('goalActs')) : [], //The activity objects corresponding to the currently selected target 
        goalsActs: [], //A temp activity objects list
        status: false, //save status for checkedbox checked value
        recoActIdList: [],   //storge activities number list
        checkboxStatus: {}, //localstorage reload goals checkboxes status
        goalActsItems: [],
        count: 0,
        loading: true,
        currentAct: "",
        selectActs: sessionStorage.getItem(["selectActsItems"]) ? sessionStorage.getItem(["selectActsItems"]).split(',') : []
    }

    componentDidMount() {
        const checkboxStatus = { ...localStorage };
        this.setState({ checkboxStatus, })

        const goalActsItems = { ...sessionStorage };
        this.setState({ goalActsItems, })
        // console.log("here",goalActsItems)
        // console.log("here2",sessionStorage.getItem(["selectActsItems"]))
        // console.log("here3",goalActsItems["selectActsItems"])


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
        let unique = arr.filter((ele, ind) => ind === arr.findIndex(elem => elem.name === ele.name))
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

    async getGoalChecked(e) {
        this.state.count++
        //load goal checkboxes status into localstorage
        if (e.target.type === 'checkbox') {
            localStorage.setItem(e.target.id, e.target.checked)
        }

        //load saved checkbox status after click goal
        const checkboxStatus = { ...localStorage };
        this.setState({ checkboxStatus, })

        //load saved activities after click goal
        const goalActsItems = { ...sessionStorage };
        this.setState({ goalActsItems, })


        if (e.target.checked === true) {
            await this.setState({ status: true })
        } else if (e.target.checked === false) {
            await this.setState({ status: false })
        }

        //First time goal click after reloading, concat previous session states to current goalsActs
        if ((goalActsItems["goalActs"]) && this.state.count === 1 && this.state.status === true) {

            JSON.parse(goalActsItems["goalActs"]).map(actItem => {
                return (this.state.goalsActs.push(actItem))
            })
            //console.log("this is true, first pushing and loading", this.state.goalsActs)
        } else if ((goalActsItems["goalActs"]) && this.state.count === 1 && this.state.status === false) {
            JSON.parse(goalActsItems["goalActs"]).map(actItem => {
                return (this.state.goalsActs.push(actItem))
            })

            for (let i of this.state.recoActIdList) {
                let index = this.state.goalsActs.findIndex(e => e === this.findAct(i))
                this.state.goalsActs.splice(index, 1)
            }

            //console.log("this is false, first pushing, splicing and loading", this.state.goalsActs)
        }


        if (this.state.status) {
            for (let i of this.state.recoActIdList) {
                this.state.goalsActs.push(this.findAct(i))
                //console.log("This is true and push", this.state.goalsActs)
            }
        } else {
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

    async getActChecked(e) {
        if (e.target.type === 'checkbox') {
            localStorage.setItem(e.target.id, e.target.checked)
        } // click to add to session storage

        const checkboxStatus = { ...localStorage };
        this.setState({ checkboxStatus, }) //click to update session storage
        
        //load saved activities after click activity
        const goalActsItems = { ...sessionStorage };
        this.setState({ goalActsItems, })
        
        //get activity name
        if (e.target.checked){
            this.setState({currentAct: e.target.value})
            this.state.selectActs.push(e.target.value)
            
            console.log(this.state.selectActs)
        } else {
            this.setState({currentAct: ""})
            let index = this.state.selectActs.findIndex(i => i === e.target.value)
            this.state.selectActs.splice(index, 1)
            console.log(this.state.selectActs)
        }
        localStorage.setItem(e.target.value, e.target.checked)
        sessionStorage.setItem("selectActsItems", this.state.selectActs)
        
        
        
        //console.log(e.target.value)
    }

    async emptyBind(event) {
    }

    onSwitch = checked => {
        this.setState({ loading: !checked })
      };


    render() {
        const { loading } = this.state;

        return (
            <>
                <button type="button" className ="btn btn-outline-warning" onClick={() => localStorage.clear()}>clear local storage</button>
                <button type="button" className ="btn btn-outline-warning" onClick={() => sessionStorage.clear()}>clear session storage</button>
                <button type="button" className="btn btn-outline-success" onClick={() => window.location.reload(false)}>Click to reload</button>

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
                                            <input type="checkbox" className="btn-check" id={goal.goalNumber} value={goal.name} onChange={event => this.getGoalChecked(event)} checked={this.state.checkboxStatus[goal.goalNumber] === "true" ? true : false} />
                                            <label className="btn btn-outline-primary btn-sm" htmlFor={goal.goalNumber} onClick={() => this.handler(goal.goalNumber)}>{goal.name}</label>
                                            <div style={{ height: '10px' }}></div>
                                        </div>
                                    ))
                                }
                            </div>


                            <div className="col" onChange={this.emptyBind.bind(this)} style={{ width: "500px", height: '600px' }}>
                                <h5>Activites:</h5>
                                <br />
                                <div >
                                    {
                                        this.state.goalActs.map(goalAct => {
                                            console.log(goalAct.contribution)
                                            if (goalAct.contribution === "Very high") {
                                                return <div className="d-grid gap-0 btn-group text-primary" role="group" aria-label="Basic checkbox toggle button group" key={goalAct._id}>
                                                    <input type="checkbox" className="btn-check" id={goalAct._id} value={goalAct.name} onChange={event => this.getActChecked(event)} checked={this.state.checkboxStatus[goalAct._id] === "true" ? true : false} />
                                                        <label className="btn btn-outline-primary btn-sm" htmlFor={goalAct._id}>{goalAct.name}</label>
                                                    <div style={{ height: '10px' }}></div>
                                                </div>
                                            } else if (goalAct.contribution === "High") {
                                                return <div className="d-grid gap-0 btn-group" role="group" aria-label="Basic checkbox toggle button group" key={goalAct._id}>
                                                    <input type="checkbox" className="btn-check" id={goalAct._id} value={goalAct.name} onChange={event => this.getActChecked(event)} checked={this.state.checkboxStatus[goalAct._id] === "true" ? true : false} />
                                                        <label className="btn btn-outline-secondary btn-sm" htmlFor={goalAct._id}>{goalAct.name}</label>                                                                                                                                                                                                                                                                                                 
                                                    <div style={{ height: '10px' }}></div>
                                                </div>
                                            }
                                            return<div></div>
                                        })
                                    }
                                </div>
                            </div>
                            
                                <div className="col text-dark" content="width=decive-width, initial-scale=1">

                                    <label className="mx-2 md-3 h5">All Cards:</label>
                                    <Switch checked={!loading} onChange={this.onSwitch} />  
                                    {/* <h1 style={{position: 'relative', top:"20%",right:'16%'}}>Iteration One</h1>  
                                    <h1 style={{position: 'relative', bottom:"20%",right:'16%'}}>Iteration Two</h1> */}
                                        
                                    <hr style={{height: '30%', width: '46%', position: 'absolute', right:'3%', color: '#1890ff'}}/>
                                    <hr style={{height: '60%', width: '46%', position: 'absolute', right:'3%', color: '#13c2c2'}}/>
                                    <hr style={{height: '90%', width: '46%', position: 'absolute', right:'3%', color: '#85a5ff'}}/>
                                    
                                    {this.state.selectActs.map(act => <ActivityCard key={act} loadingValue={loading} actName={act} pos={{x:0,y:0}}/>)} 
                                                                 
                                </div>
                                
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GoalsActitivitiesList