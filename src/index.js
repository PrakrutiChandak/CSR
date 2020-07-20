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
ReactDOM.render(
  <BrowserRouter>
   <div className="MainContainer">     
   <Route exact path="/" component={Login} />
   <Route exact path="/Login" component={Login} />
   <Route exact path="/OrgRegistration" component={OrgRegistration}/>
   <Route className="myRoute" path="/EmpRegistration" component={EmployeeReg}/>
</div>
  <Route exact path="/NavSample" component={NavSample} />
    <Route className="myRoute" path="/Home" component={Home2} exact/>
        <Route className="myRoute" path="/About" component={About}/>
        <Route className="myRoute" path="/PastEvents" component={PastEvents}/>
        <Route className="myRoute" path="/UpcomingEvents" component={UpcomingEvents}/>
        <Route className="myRoute" path="/Event1Reg" component={Event1Reg}/>
        <Route className="myRoute" path="/SampleEvent" component={SampleEvent}/>


  
</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
