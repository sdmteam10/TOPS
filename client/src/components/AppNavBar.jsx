import React, { Component } from 'react';

class AppNavBar extends Component {
    state = {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand ms-md-5" href="/">TOPS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-25 mx-md-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Goals">Goals</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavBar