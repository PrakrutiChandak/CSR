import React, { Component } from 'react'
import UserImg from '../Components/UserName.png'
import '../Components/LoginStyle.css'
import OrgRegistration from '../Components/OrgRegistration'
export default class Login extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
            <div className="BorderCss">
            <div class="Image">
                <img src={UserImg}/>
                </div>
                <div className="Border2">
                <label id="lbl_user">User Name :</label>
                <br/>
                <input id="ip_user" type="text" placeholder="User Name" ></input>
                <br/>
                <label id="lbl_pwd">Password :</label>
                <br/>
                <input id="ip_pwd" type="password" placeholder="Password"></input>
                <br/><br/>
                <button id="btn_login">Login</button>
                <br/>
                <br/>
                <button id="btn_signup">Sign Up</button>
                </div>
                </div>
            </div>
        )
    }
}
