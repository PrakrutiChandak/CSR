import React from 'react';
//import './App.css';
import Rep_Gen from './Components/Rep_Gen'
import AddEvent from './Components/AddEvent';
import OrgRegistration from './Components/OrgRegistration';
import Login from './Components/Login';
import SampleEvent from './Components/SampleEvent';
import Event1Reg from './Components/Event1Reg';
//import Navigation from './Components/Navigation1';
import About from './Components/About'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import PastEvents from './Components/PastEvents';
import UpcomingEvents from './Components/UpcomingEvents';
import EmployeeReg from './Components/EmployeeReg';
import Home2 from './Components/Home2';
import NavSample from './Components/NavSample';
function App()
 {
  return (
    
   <div className="App">  
   {/*<div className="MainContainer">
      { <BrowserRouter>
            <Switch>
                <Route className="myRoute" path="/" component={Login} exact/>
                <Route className="myRoute" path="/OrgRegistration" component={OrgRegistration} />
               
           </Switch>
           </BrowserRouter>
  </div>
  <div className="MainContainer2">
  <BrowserRouter>
  <Switch>
  <Route className="myRoute" path="/Navigation" component={Navigation} /> 
  </Switch>
  </BrowserRouter>
      </div>*/}
  </div>
  );
}
export default App;
