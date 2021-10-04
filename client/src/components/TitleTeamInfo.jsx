import React, { Component } from 'react';

class TitleTeamInfo extends Component {
    state = {

    }

    render() {
        return (
          <div className="bg-primary font-monospace" style={{ height: "auto" }}>
            <div className='mx-auto text-center'>
            <br />
              <h2 className="text-light">Team Information</h2>
              <br />
              <h6 className="text-light"> Fill in the form quickly.</h6>
              <h6 className="text-light"> Record the interview. </h6>
              <h6 className="text-light"> Automatic generate activity suggestion. </h6>
              <br />
            </div>
          </div>
        )
    }
}

export default TitleTeamInfo