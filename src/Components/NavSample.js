import React, { Component } from 'react'
import '../Components/NavStyle.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default class NavSample extends Component {
    render() {
        return (
            <div>
                <nav className="navbarContainer">
            <Navbar>
                <Nav>
                    <NavLink id="navMenu" exact to="/Home">HOME</NavLink>
                    <NavLink id="navMenu" exact to="/About">ABOUT US</NavLink>
                    <NavLink id="navMenu" exact to="/UpComingEvents">UPCOMING EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/PastEvents">PAST EVENTS</NavLink>
                    <NavLink id="navMenu" exact to="/Home">MY PROFILE</NavLink>
                </Nav>

            </Navbar>
                </nav>
                </div>
        )
    }
}
