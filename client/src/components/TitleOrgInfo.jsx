import React, { Component } from 'react';

class TitleOrgInfo extends Component {
    state = {

    }

    render() {
        return (
          <div className="bg-primary font-monospace" style={{ height: "auto" }}>
            <div className='mx-auto text-center'>
              <br />
              <h2 className="text-light">Organisational Information</h2>
              <br />
              <h6 className="text-light"> Fill in the form quickly.</h6>
              <h6 className="text-light"> Record the interview. </h6>
              <br />
            </div>
          </div>
        )
    }
}

export default TitleOrgInfo