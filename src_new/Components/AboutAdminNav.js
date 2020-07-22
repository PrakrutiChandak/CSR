import React, { Component } from 'react'
import About from './About'
import NavSampleAdmin from './NavSampleAdmin'
export default class AboutAdminNav extends Component {
    render() {
        return (
            <div>
                <NavSampleAdmin/>
                <About/>
            </div>
        )
    }
}
