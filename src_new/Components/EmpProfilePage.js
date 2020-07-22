/*Note:
 */


import React, { Component } from 'react'
import '../Components/EmpProfileCss.css'
import Edit from '../Components/images/Edit.jpg'
import Register from '../Components/images/Register.jpg'
import Attendance from '../Components/images/Attendance.jpg'
import Schedule from '../Components/images/Schedule.jpg'
import Statistics from '../Components/images/Statistics.jpg'
import Logout from '../Components/images/Logout.jpg'
import NavSample from './NavSample'
import { Redirect } from 'react-router-dom'
export default class extends Component {
  constructor()
  {
    super();
    this.state={
      regEmp:false,
      regEvent:false,
      eveAttend:false,
      eveSchedule:false,
      logout:false
    }
  }
  setRedirectRegEmp = () => 
  {
    this.setState({regEmp: true})
  }
  regEmp = () => 
  {
    if(this.state.regEmp==true)
    return<Redirect to="/EmpRegistration"/>
  }


  setRedirectRegEve = () => 
  {
    this.setState({regEvent: true})
  }
  regEve = () => 
  {
    if(this.state.regEvent==true)
    return<Redirect to="/UpComingEvents"/>
  }


  setRedirectEveAttend = () => 
  {
    this.setState({eveAttend: true})
  }
  regEveAttend = () => 
  {
    if(this.state.eveAttend==true)
    return<Redirect to="/PastEvents"/>
  }


  setRedirectEveSchedule = () => 
  {
    this.setState({eveSchedule: true})
  }
  regEveSchedule = () => 
  {
    if(this.state.eveSchedule==true)
    return<Redirect to="/UpcomingEvents"/>
  }


  setRedirectLogout = () => 
  {
    this.setState({logout: true})
  }
  logOutFunc = () => 
  {
    if(this.state.logout==true)
    return<Redirect to="/Login"/>
  }

  render() {
    return (
      <div>
        <NavSample/>
      <div className="MainProfContainer">
        <h1 id="headProfile">MY PROFILE</h1>
        <div className="DivContainer">
        <img className="ProfImg" src={Edit}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectRegEmp}>EDIT PROFILE</button>
         {this.regEmp()}
        </div>
        <div className="DivContainer">
        <img className="ProfImg"src={Register}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectRegEve}>REGISTERED EVENTS</button>
         {this.regEve()}
        </div >
        <div className="DivContainer">
        <img className="ProfImg"src={Attendance}/>
        <br/>
        <button id="ProfBtn" onClick={this.setRedirectEveAttend}>ATTENDED EVENTS</button>
        {this.regEveAttend()}
        </div>
        <br/>


        <div className="DivContainer">
        <img className="ProfImg" src={Schedule}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectEveSchedule}>SCHEDULED EVENTS</button>
         {this.regEveSchedule()}
        </div>
        <div className="DivContainer">
        <img className="ProfImg"src={Statistics}/>
        <br/>
         <button id="ProfBtn">MY STATISTICS</button>
        </div >
        <div className="DivContainer">
        <img className="ProfImg"src={Logout}/>
        <br/>
        <button id="ProfBtn" onClick={this.setRedirectLogout}>LOG OUT</button>
        {this.logOutFunc()}
        </div>
        </div>
         </div>
    )
  }
}
