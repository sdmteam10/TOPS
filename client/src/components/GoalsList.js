import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'react-uuid'

class GoalsList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Goal1' },
            { id: uuid(), name: 'Goal2' },
            { id: uuid(), name: 'Goal3' },
            { id: uuid(), name: 'Goal4' }
        ]
    }

    render() {
        const { items } = this.state
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={() =>{
                        const name = prompt('Enter Item')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className='goals-list'>
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color='danger'
                                    size='sm'
                                    onClick={() =>{
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)        
                                        }));
                                    }}
                                >&times;
                                </Button>
                                {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
        
    }
}

export default GoalsList