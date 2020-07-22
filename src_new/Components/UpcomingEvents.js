import React, { Component } from 'react'
import Event1Reg from './Event1Reg'
import { Redirect } from 'react-router-dom'
import NavSample from './NavSample'
import EmployeeReg from './EmployeeReg'
import '../Components/EventStyles.css'
export default class UpcomingEvents extends Component {
    render() {
        return (
            <div>
                <h1 style={{paddingLeft:"50px"}}>Blood Donation Camp</h1>
                <Event1Reg/>
            </div>
        )
    }
}
