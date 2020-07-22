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
                    <NavLink id="navMenu" exact to="/Home1">HOME</NavLink>
                    <NavLink id="navMenu" exact to="/UpComingEvents1">UPCOMING EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/PastEvents1">PAST EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/About1">ABOUT US</NavLink>
                    <NavLink id="navMenu" to="/AdminProfile">MY PROFILE</NavLink>
                </Nav>
            </Navbar>
           
                </nav>
                               </div>
        )
    }
}
