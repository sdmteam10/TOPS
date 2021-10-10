import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="mt-md-5 ws-0 mx-md-auto">
          <div>
            <h1 className="text-secondary fw-light font-monospace">Welcome to TOPS!</h1>
            <br />
            <br />
          </div>
          <div>
            <a className="link-secondary fw-light font-monospace" href="Designer">Designer Entrance</a>
          </div>
          <div>
            <a className="link-secondary fw-light font-monospace" href="Onboarder">Onboarder Entrance</a>
          </div>
          <div>
            <a className="link-secondary fw-light font-monospace" href="GoalsActivitiesList">Activity Scheduler</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home