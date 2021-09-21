import React, { Component } from 'react'
import axios from 'axios'

class GoalsList extends Component {
    state = {
        goals: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/api/goals/')
            .then(res => {
                this.setState({ goals: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    CreateGoal(newGoal) {
        console.log('Clicked')
        axios.post('http://localhost:5000/routes/api/goals/', newGoal)
            .then(res => {
                // 存进state
            })
            .catch(err => {
                console.log(err)
            })
    }

    // clicked(param,event){
        
    // }

    render() {
        return (
            <>
                
                {/* Goals List */}
                <div className="w-75 mx-auto mt-md-5" style={{ height: '500px' }}>
                    <br />
                    {
                        this.state.goals.map(goal => (
                            <div className = "d-grid gap-0 col-10 mx-auto" key={goal._id}>
                                <button type="button" className="btn btn-outline-primary">{goal.name}</button>
                                <hr />
                            </div>
                        ))
                    }

                    {/* New Goal Form */}
                    <form>
                        <label htmlFor="goalName">Goal Name</label>
                        <input name="goalName" type="text" className="form-control" />

                        <button className="btn btn-info" onClick="">Create Goal</button>
                    </form>
                </div>
            </>
        )
    }
}

export default GoalsList