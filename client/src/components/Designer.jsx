import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/*This is the designer's landing page. */
class Designer extends Component {
  render() {
    return (

      
      <div>
        <div className="mt-md-5 ws-0 mx-md-auto">
            <div>
            <h1 className="link-secondary fw-light font-monospace">Welcome Designer!</h1>
            <br />
            <br />
            </div>
            <div>
            <a className="link-secondary fw-light font-monospace" href="OrgInfo">Organisation Information Form</a>
            </div>
            <div>
            <a className="link-secondary fw-light font-monospace" href="Goals">Goals Page</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Designer