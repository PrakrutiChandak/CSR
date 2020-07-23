import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route,BrowserRouter } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import OrgRegistration from './Components/OrgRegistration';
import Login from './Components/Login'
import NavSample from './Components/NavSample';
import Home2 from './Components/Home2';
import About from './Components/About'; 
import UpcomingEvents from './Components/UpcomingEvents';
import PastEvents from './Components/PastEvents';
import Event1Reg from './Components/Event1Reg';
import EmployeeReg from './Components/EmployeeReg';
import SampleEvent from './Components/SampleEvent';
import EmpProfilePage from './Components/EmpProfilePage';
import AdminProfile from './Components/AdminProfile';
import AddEvent from './Components/AddEvent';
import Report_Generation from './Components/Rep_Gen';
import NavSampleAdmin from './Components/NavSampleAdmin'
import AboutAdminNav from './Components/AboutAdminNav';
import AboutEmpNav from './Components/AboutEmpNav';
import HomeEmpNav from './Components/HomeEmpNav';
import HomeAdminNav from './Components/HomeAdminNav';
import PastEveEmpNav from './Components/PastEveEmpNav';
import PastEveAdminNav from './Components/PastEveAdminNav';
import UpComEveEmpNav from './Components/UpComEveEmpNav';
import UpComEveAdminNav from './Components/UpComEveAdminNav';
ReactDOM.render(
  <BrowserRouter>
   <div className="MainContainer">    
   <Route exact path="/Login" component={Login} />
   <Route exact path="/OrgRegistration" component={OrgRegistration}/>
   <Route className="myRoute" path="/EmpRegistration" component={EmployeeReg}/>
   <Route className="myRoute" path="/AddEvent" component={AddEvent}/>
   <Route className="myRoute" path="/Rep_Gen" component={Report_Generation}/>


</div>
  <Route exact path="/NavSample" component={NavSample} />
  <Route exact path="/NavSampleAdmin" component={NavSampleAdmin} />
    <Route className="myRoute" path="/Home2" component={HomeEmpNav} exact/>
        <Route className="myRoute" path="/About2" component={AboutEmpNav}/>
        <Route className="myRoute" path="/PastEvents2" component={PastEveEmpNav}/>
        <Route className="myRoute" path="/UpComingEvents2" component={UpComEveEmpNav}/>

        <Route className="myRoute" path="/Home1" component={HomeAdminNav} exact/>
        <Route className="myRoute" path="/About1" component={AboutAdminNav}/>
        <Route className="myRoute" path="/PastEvents1" component={PastEveAdminNav}/>
        <Route className="myRoute" path="/UpComingEvents1" component={UpComEveAdminNav}/>
    
        <Route className="myRoute" path="/Event1Reg" component={Event1Reg}/>
        <Route className="myRoute" path="/SampleEvent" component={SampleEvent}/>
        <Route className="myRoute" path="/EmpProfilePage" component={EmpProfilePage}/>
        <Route className="myRoute" path="/AdminProfile" component={AdminProfile}/>

  
</BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
