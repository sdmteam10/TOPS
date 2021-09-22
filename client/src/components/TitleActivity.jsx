import React, { Component } from 'react';

class TitleActivity extends Component {
    state = {

    }

    render() {
        return (
          <div className="bg-primary" style={{ height: '150px' }}>
            <div className='text-light mx-auto text-center'>
              <h1>Activity Scheduler</h1>
              <h6> Select goals or drag goals onto a card to create your own scheduler.</h6>
              <h6> Make up your own activity scheduler.</h6>
            </div>
          </div>
        )
    }
}

export default TitleActivity