import React, { Component } from 'react'
import axios from 'axios'

class GoalsList extends Component {
    state = {
        goals: []
    }

    componentDidMount() {
			axios.get('http://localhost:5000/routes/api/goals/')
				.then(res => {
					this.setState({goals: res.data})
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

    render() {
        return(
            <>
						{/* Golas List */}
            	<div className="w-50 mx-auto mt-md-5" style={{height: '200px', overflowY: 'auto'}}>
	              {
									this.state.goals.map(goal => (
										<div key={goal._id}>
											<h5>{goal.name}</h5>
											<hr />
										</div>
									))
	              }
	            </div>

							{/* New Goal Form */}
							<form>
								<label htmlFor="goalName">Goal Name</label>
								<input name="goalName" type="text" className="form-control" />

								<button className="btn btn-info" onClick="">Create Goal</button>
							</form>
            </>
        )
    }
}

export default GoalsList

// <Container>
            //     <Button
            //         color="dark"
            //         style={{marginBottom:'2rem'}}
            //         onClick={() =>{
            //             const name = prompt('Enter Item')
            //             if (name) {
            //                 this.setState(state => ({
            //                     items: [...state.items, { id: uuid(), name }]
            //                 }))
            //             }
            //         }}
            //     >
            //         Add Item
            //     </Button>

            //     <ListGroup>
            //         <TransitionGroup className='goals-list'>
            //             {items.map(({ id, name }) => (
            //                 <CSSTransition key={id} timeout={500} classNames='fade'>
            //                     <ListGroupItem>
            //                     <Button
            //                         className="remove-btn"
            //                         color='danger'
            //                         size='sm'
            //                         onClick={() =>{
            //                             this.setState(state => ({
            //                                 items: state.items.filter(item => item.id !== id)        
            //                             }));
            //                         }}
            //                     >&times;
            //                     </Button>
            //                     {name}</ListGroupItem>
            //                 </CSSTransition>
            //             ))}
            //         </TransitionGroup>
            //     </ListGroup>
            // </Container>