import React, { Component } from 'react'
import '../Components/NavStyle.css'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import DropDownSample from './EmpProfilePage'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
export default class NavSample extends Component {
    render() {
        return (
            <div>
                <nav className="navbarContainer">
            <Navbar>
                <Nav>
                    <NavLink id="navMenu" exact to="/Home2">HOME</NavLink>
                    <NavLink id="navMenu" exact to="/UpComingEvents2">UPCOMING EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/PastEvents2">PAST EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/About2">ABOUT US</NavLink>
                    <NavLink id="navMenu" to="/EmpProfilePage">MY PROFILE</NavLink>
                </Nav>
            </Navbar>
           
                </nav>
                               </div>
        )
    }
}
