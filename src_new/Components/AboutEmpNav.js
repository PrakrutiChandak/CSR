import React, { Component } from 'react'
import NavSample from './NavSample'
import About from './About'

export default class AboutEmpNav extends Component {
    render() {
        return (
            <div>
                <NavSample/>
                <About/>
            </div>
        )
    }
}
