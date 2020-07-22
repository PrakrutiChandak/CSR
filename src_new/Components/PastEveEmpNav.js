import React, { Component } from 'react'
import NavSample from './NavSample'
import PastEvents from './PastEvents'

export default class PastEveEmpNav extends Component {
    render() {
        return (
            <div>
                <NavSample/>
                <PastEvents/>
            </div>
        )
    }
}
