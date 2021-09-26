import React, { Component } from 'react';

class Onboarder extends Component {
  render() {
    return (
      <div>
        <div className="mt-md-5 ws-0 mx-md-auto">
          <div>
            <h1 className="text-secondary fw-light font-monospace">Welcome Onboarder!</h1>
            <br />
            <br />
          </div>
          <div>
            <a className="link-secondary fw-light font-monospace" href="OnboarderInfo">Onboarder Information Form</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Onboarder