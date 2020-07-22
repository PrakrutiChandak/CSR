import React, { Component } from 'react'
import '../Components/EventStyles.css'
export default class Event1Reg extends Component {
    EveReg= () =>
    {
        /*Note: Fetch the details of user from database and register for event*/
        alert("Registered for event successfully!!!");
    }
    render() {
        return (
            <div>
                <div className="Event1RegCss">
                <p id="para_E1Reg">
                <b>Organised by :</b>ABC HealthCare<br/>
                <b>Description :</b>To be decided....<br/>
                <b>Venue :</b>To be decided....<br/>
                <b>No. Of participants Allowed :</b>80<br/>
                <b>Registration Start Date: </b>10/12/2019<br/>
                <b>Registration End Date: </b>03/01/2020<br/>
                <b>Event Date: 16/01/2020</b><br/>
                <br/>
                <button id="RegEvent" onClick={()=>this.EveReg()}>Register</button>
                </p>
                </div>
            </div>
        )
    }
}
