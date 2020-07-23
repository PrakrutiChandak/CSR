import React, { Component } from 'react'
import NavSample from './NavSample'
import UpcomingEvents from './UpcomingEvents'

export default class UpComEveEmpNav extends Component {
    render() {
        return (
            <div>
                <NavSample/>
                <UpcomingEvents/>
            </div>
        )
    }
}
