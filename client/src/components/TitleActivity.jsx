import React, { Component } from 'react';

class TitleActivity extends Component {
    state = {

    }

    render() {
        return (
          <div className="bg-primary font-monospace" style={{ height: "auto" }}>
            <div className='text-light mx-auto text-center'>
              <br />
              <h2>Activity Scheduler</h2>
              <br />
              <h6> Drag activities onto a card to create your own scheduler.</h6>
              <h6> Select goals to see activities.</h6>
              <h6> Make your own activity scheduler.</h6>
              <br />
            </div>
          </div>
        )
    }
}

export default TitleActivity