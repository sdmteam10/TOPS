import React, { Component } from 'react';

class TitleActivity extends Component {
    state = {

    }

    render() {
        return (
          <div className="bg-primary font-monospace" style={{ height: "auto" }}>
            <div className='mx-auto text-center'>
              <br />
              <h2 className="text-light">Activity Scheduler</h2>
              <br />
              <h6 className="text-light"> Drag activities onto a card to create your own scheduler.</h6>
              <h6 className="text-light"> Select goals to see activities.</h6>
              <h6 className="text-light"> Make your own activity scheduler.</h6>
              <br />
            </div>
          </div>
        )
    }
}

export default TitleActivity