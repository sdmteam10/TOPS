import React, { Component } from 'react'
import axios from 'axios'

class ActivityList extends Component {
    state = {
        activities: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/api/activities/')
            .then(res => {
                this.setState({ activities: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    CreateActivity(newActivity) {
        console.log('Clicked')
        axios.post('http://localhost:5000/routes/api/activities/', newActivity)
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
                
                {/* Activitys List */}
                <div className="w-75 mx-auto mt-md-5" style={{ height: '500px' }}>
                    <br />
                    {
                        this.state.activities.map(activity => (
                            <div className = "d-grid gap-0 col-10 mx-auto" key={activity._id}>
                                <h6 className="btn-outline-primary">{activity.name}</h6>
                                <hr />
                            </div>
                        ))
                    }


                    {/* New Activity Form */}
                    {/* <form>
                        <label htmlFor="goalName">Activity Name</label>
                        <input name="goalName" type="text" className="form-control" />

                        <button className="btn btn-info" onClick="">Create Activity</button>
                    </form> */}
                </div>
            </>
        )
    }
}

export default ActivityList