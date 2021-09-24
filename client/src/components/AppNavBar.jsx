import React, { Component } from 'react';

class AppNavBar extends Component {
    state = {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-monospace flex-row">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex w-0 me-0" href="/Home">TOPS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-fill w-50 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/Onboarder">Onboarder</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Designer">Designer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavBar