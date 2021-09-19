import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

class AppNavBar extends Component {
    
    state = {
        isOpen: false
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="sm" className="mb-5">
                        <NavbarBrand herf="/" className="text-white">TOPS</NavbarBrand> 
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className= "ml-auto" navbar>
                                <NavItem>
                                    <NavLink href='https://github.com/sdmteam10' className="text-white">
                                        Onboarder
                                    </NavLink>
                                </NavItem>
                                <NavItem>  
                                    <NavLink href='https://github.com/sdmteam10' className="text-white">
                                        Designer
                                    </NavLink>
                                </NavItem>
                                <NavItem>    
                                    <NavLink href='https://github.com/sdmteam10' className="text-white">
                                        Contact
                                    </NavLink>
                                </NavItem>  
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        )
        
    }
}

export default AppNavBar