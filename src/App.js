import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rep_Gen from './Components/Rep_Gen'
import AddEvent from './Components/AddEvent';
import OrgRegistration from './Components/OrgRegistration';
import Login from './Components/Login';
import SampleEvent from './Components/SampleEvent';
import Event1Reg from './Components/Event1Reg';
function App() {
  return (
    <div className="App">
      {/*<AddEvent/>{/*Styling done */}
      {/*<Rep_Gen/>{/*Styling done */}
      {/*<SampleEvent/>{/*Styling remaining */}
      {/*<Login/>{/*Styling done */}
      {/*<OrgRegistration/>*/}
      <Event1Reg/>
    </div>
  );
}

export default App;
