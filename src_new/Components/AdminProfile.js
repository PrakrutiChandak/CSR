/*Note:
 */


import React, { Component } from 'react'
import '../Components/AdminProfileCss.css'
import Edit from '../Components/images/Edit.jpg'
import Register from '../Components/images/Register.jpg'
import Attendance from '../Components/images/Attendance.jpg'
import Schedule from '../Components/images/Schedule.jpg'
import Statistics from '../Components/images/Statistics.jpg'
import Logout from '../Components/images/Logout.jpg'
import MyEvent from '../Components/images/MyEvent.jpg'
import AddOrg from '../Components/images/AddOrg.jpg'
import GenReport from '../Components/images/GenReport.jpg'
import MyReports from '../Components/images/MyReports.jpg'
import ScheduledEvents from '../Components/images/ScheduledEvents.jpg'
import NavSampleAdmin from './NavSampleAdmin'
import { Redirect } from 'react-router-dom'
export default class extends Component {
  constructor()
  {
    super();
    this.state={
      editProf:false,
      scheduleEve:false,
      viewEve:false,
      eveSchedule:false,
      addEve:false,
      addOrg:false,
      genRep:false,
      logout:false
    }
  }
  setRedirectEditProfile = () => 
  {
    this.setState({editProf: true})
  }
  editProfile= () => 
  {
    if(this.state.editProf==true)
    return<Redirect to="/EmpRegistration"/>
  }


  setRedirectScheduleEvent = () => 
  {
    this.setState({scheduleEve: true})
  }
  scheduleEvent= () => 
  {
    if(this.state.scheduleEve==true)
    return<Redirect to="/UpcomingEvents"/>
  }


  setRedirectViewEvent = () => 
  {
    this.setState({viewEve: true})
  }
  viewEvent= () => 
  {
    if(this.state.viewEve==true)
    return<Redirect to="/PastEvents"/>
  }


  setRedirectAddEvent = () => 
  {
    this.setState({addEve: true})
  }
  addEvent= () => 
  {
    if(this.state.addEve==true)
    return<Redirect to="/AddEvent"/>
  }


  setRedirectAddOrganisation = () => 
  {
    this.setState({addOrg: true})
  }
  addOrganisation= () => 
  {
    if(this.state.addOrg==true)
    return<Redirect to="/OrgRegistration"/>
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
        <NavSampleAdmin/>
      <div className="MainProfContainer">
        <h1 id="headProfile">ADMIN PROFILE</h1>


        {/* Same as Emp*/}
        <div className="DivContainer">
        <img className="ProfImg" src={Edit}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectEditProfile}>EDIT PROFILE</button>
         {this.editProfile()}
        </div>



        


         {/* Same as Emp*/}
         <div className="DivContainer">
        <img className="ProfImg" src={ScheduledEvents}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectScheduleEvent}>SCHEDULED EVENTS</button>
         {this.scheduleEvent()}
        </div>

{/*Not directed to new page*/}
        <div className="DivContainer">
        <img className="ProfImg"src={Schedule}/>
        <br/>
         <button id="ProfBtn" onClick={this.setRedirectViewEvent}>VIEW EVENTS</button>
         {this.viewEvent()}
        </div >


        

        <div className="DivContainer">
        <img className="ProfImg"src={MyEvent}/>
        <br/>
        <button id="ProfBtn" onClick={this.setRedirectAddEvent}>ADD NEW EVENT</button>
        {this.addEvent()}
        </div>
        
        <br/>

        <div className="DivContainer">
        <img className="ProfImg"src={AddOrg}/>
        <br/>
        <button id="ProfBtn" onClick={this.setRedirectAddOrganisation}>ADD ORGANISER</button>
        {this.addOrganisation()}
        </div>



        <div className="DivContainer">
        <img className="ProfImg"src={GenReport}/>
        <br/>
         <button id="ProfBtn" >GENERATE REPORT</button>
        </div >

        {/*Not Handled */}
        <div className="DivContainer">
        <img className="ProfImg"src={MyReports}/>
        <br/>
        <button id="ProfBtn" onClick={this.setRedirectEveAttend}>MY REPORTS</button>
        </div>
         {/*Not Handled */}
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
