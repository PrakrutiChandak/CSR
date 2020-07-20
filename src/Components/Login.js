import React, { Component } from 'react'
import UserImg from '../Components/UserName.png'
import '../Components/LoginStyle.css'
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            ip_user:"",
            ip_pwd:"",
            genError:"",
            redirect: false,
            loggedIn:false
        };
    } 
   isValid()
    {
        if(this.state.ip_user.length<1)
        this.setState({genError:"Empty field: User Name"});
        else if(this.state.ip_pwd.length<1)
        this.setState({genError:"Empty field: Password length should be > 8"});
        else
        return true;
    }
    validate()
    {
        if(this.isValid()==true)
        {
            this.setState({
                loggedIn: true})
            /*Note : Add the input fields' data to the database*/
        }
        else
        {
            this.isValid();
        }
    }
    renderRedirect = () => {
        if (this.state.redirect)
         {
          return<Redirect to="/EmpRegistration"/>
        }
    }
    
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirectNav=()=>
      {
          if(this.state.loggedIn)
          {
              /*Note: Write your logic for role based login here and render
              return<Redirect to="/NavSampleAdmin"/>
               */
            return<Redirect to="/NavSample"/>
          }
      }
        render() {
                   return (
                       <div>
                             <h1 id="headLogin">CSR LOGIN</h1>
            <div className="LoginContainer">
              
                <br/>
            <div className="BorderCss">
            <div className="Image">
                <img src={UserImg}/>
                </div>
                <div className="Border2">
                <label id="lbl_user">User Name :</label>
                <br/>
                <input id="ip_user" type="text" placeholder="User Name" onChange={(event)=>this.setState({ip_user:event.target.value})}></input>
                <br/>
                <label id="lbl_pwd">Password :</label>
                <br/>
                <input id="ip_pwd" type="password" placeholder="Password"onChange={(event)=>this.setState({ip_pwd:event.target.value})}></input>
                <p id="validation_login">{this.state.genError} </p>
                <br/>
                <button id="btn_login" onClick={()=>this.validate()}>Login</button>
                {this.renderRedirectNav()}
                <br/>
                <br/>
                <button id="btn_signup"onClick={this.setRedirect}>Sign Up</button>
                {this.renderRedirect()}
                </div>
                </div>
                </div>
            </div>
        )
    }
}

