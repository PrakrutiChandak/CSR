import React, { Component } from 'react'
import NavSampleAdmin from './NavSampleAdmin'
import PastEvents from './PastEvents'
export default class PastEveAdminNav extends Component {
    render() {
        return (
            <div>
                <NavSampleAdmin/>
                <PastEvents/>
            </div>
        )
    }
}
