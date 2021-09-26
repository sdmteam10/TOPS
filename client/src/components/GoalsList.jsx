import React, { Component } from 'react'
import axios from 'axios'


class GoalsList extends Component {


    state = {
        goals: [], //init goals
        acts: [],  //init activities
        act: {},
        currentGoal: {}, //Currently selected target
        goalActs: [],   //The activity objects corresponding to the currently selected target
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

    CreateGoal(newGoal) {
        console.log('Clicked')
        axios.post(`/routes/api/goals/`, newGoal)
            .then(res => {
                // 存进state
            })
            .catch(err => {
                console.log(err)
            })
    }


    async handler(goalNumber) {
        //this.state.goalActs = []
        await this.setState({
            goalActs: [],
            currentGoal: {},
            recoActIdList: [],
            act: {}
        })

        for (let i of this.state.goals) {
            if (i.goalNumber === goalNumber) {
                //console.log(i)
                //this.state.currentGoal = i
                this.setState({ currentGoal: i })
            }
        }

        this.setState({
            recoActIdList: this.state.currentGoal.goalActivities
        })

        //this.state.recoActIdList = this.state.currentGoal.goalActivities
        //console.log(this.state.currentGoal.goalActivities)

        //get all actitity objects
        for (let i of this.state.recoActIdList) {
            // Get the actitity number by the object
            //Debugging
            this.setState({ act: this.findAct(i) })
            //this.state.act = this.findAct(i)
            //console.log(this.state.act)

            this.state.goalActs.push(this.state.act)

        }
        this.setState({ goalActs: this.state.goalActs })
        //console.log(this.state.goalActs)

    }

    findAct(activityNumber) {

        //console.log(activityNumber)
        let act = {}
        //console.log(this.state.acts)
        for (let i of this.state.acts) {
            if (i.activityNumber === activityNumber) {
                act = i
                //console.log(i)
            }
        }
        //console.log(act)
        return act
    }

    render() {

        return (
            <>
                {/* Goals List */}
                <div className='container-fluid'>
                    <div className="w-75 mx-auto mt-md-5 font-monospace" style={{ height: '500px' }}>
                        <br />

                        {
                            this.state.goals.map(goal => (
                                <div className="d-grid gap-0 col-10 mx-auto btn-group dropend" key={goal._id}>
                                    <button onClick={() => this.handler(goal.goalNumber)} className="btn col-md-auto btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">{goal.name}</button>

                                    <ul className="dropdown-menu">
                                        {

                                            this.state.goalActs.map(goalAct => (

                                                <li className="dropdown-item" key={goalAct._id}>{goalAct.name}</li>

                                                //  <RecomActivity key={goalAct._id} act={goalAct} />
                                            ))
                                        }
                                    </ul>
                                    <hr />
                                </div>
                            ))
                        }

                        {/* New Goal Form */}
                        {/* <form>
                        <label htmlFor="goalName">Goal Name</label>
                        <input name="goalName" type="text" className="form-control" />

                        <button className="btn btn-info">Create Goal</button>
                    </form> */}
                    </div>
                </div>
            </>
        )
    }
}

export default GoalsList