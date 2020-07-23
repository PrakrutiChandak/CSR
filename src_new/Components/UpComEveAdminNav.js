import React, { Component } from 'react'
import NavSampleAdmin from './NavSampleAdmin'
import UpcomingEvents from './UpcomingEvents'
export default class UpComEveAdminNav extends Component {
    render() {
        return (
            <div>
                <NavSampleAdmin/>
                <UpcomingEvents/>
            </div>
        )
    }
}
