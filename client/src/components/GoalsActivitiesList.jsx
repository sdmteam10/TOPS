import React, { Component } from 'react'
import axios from 'axios'

class GoalsActitivitiesList extends Component {

    state = {
        goals: [], //init goals
        acts: [],  //init activities
        act: {},   //init a single activity object
        currentGoal: {}, //Currently selected target
        goalActs: [],   //The activity objects corresponding to the currently selected target
        goalsActs: [], //A temp activity objects list
        status: false,
        recoActIdList: []   //storge activities number list
    }

    componentDidMount() {
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
            // goalActs: [],
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
        })
        
    }

    async emptyBind(event){
    

    }




    render() {

        return (
            <>
            {/* Goals List */}
            <div className='container'>
                
                <div className="w-75 me-auto mt-md-5 font-monospace" style={{ height: '500px' }}>
                <br />

                    <div className='row'> 
                          
                        <div className='col' onChange={this.emptyBind.bind(this)}> 
                        {
                            //d-grid gap-0
                            this.state.goals.map(goal => (
                                <div className=" d-grid gap-0 btn-group" role="group" aria-label="Basic checkbox toggle button group" key={goal._id}>
                                    <input type="checkbox" className="btn-check" id={goal._id} value={goal.name} onChange={event => this.getGoalChecked(event)} />
                                    
                                    <label className="btn btn-outline-primary " htmlFor={goal._id} onClick={() => this.handler(goal.goalNumber)}>{goal.name}</label>
                                    <div style={{ height: '10px' }}></div>
                                </div>
                            ))
                        }
                        </div>
                         

                        <div className="col" style={{ width: "500px", height: '600px' }}>
                            <div >
                                {
                                        this.state.goalActs.map(goalAct => (  
                                        // <div type="checkbox" key={goalAct._id}>{goalAct.name}</div>
                                            <div className="d-grid gap-0 btn-group" role="group" aria-label="Basic checkbox toggle button group" key={goalAct._id}>
                                                <input type="checkbox" className="btn-check" id={goalAct._id} value={goalAct.name} defaultChecked/>
                                                <label className="btn btn-outline-primary" htmlFor={goalAct._id}>{goalAct.name}</label>
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

export default GoalsActitivitiesList

