import React, { Component } from 'react'
import '../Components/FormStyle.css'
import { Redirect } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap';
export default class OrgRegistration extends Component {
    constructor()
    {
        super();
        this.state={
            flag:"1",
            org_id:"",
            org_name:"",
            org_type:"",
            org_address:"",
            org_contact:"",
            org_email:"",
            org_user_name:"",
            org_user_pwd:"",
            genError:"",
        }
    }
    isValid()
    {
        if(this.state.org_id.length<1)
        this.setState({genError:"Empty field: Organisation ID"});
        else if(this.state.org_name.length<1)
        this.setState({genError:"Empty field: Organisation Name"});
        else if(this.state.org_type.length<1)
        this.setState({genError:"Empty field: Organisation Type"});
        else if(this.state.org_address.length<1)
        this.setState({genError:"Empty field: Organisation Address"});
        else if(this.state.org_contact.length!=10)
        this.setState({genError:"Empty or invalid field: Organisation Contact No."});
        else if(this.state.org_email.length<1&&!this.state.org_email.includes("@."))
        this.setState({genError:"Empty or invalid field: Organisation Email"});
        else if(this.state.org_user_name.length<1)
        this.setState({genError:"Empty field: User Name"});
        else if(this.state.org_user_pwd.length<8)
        this.setState({genError:"Empty field: Password length should be > 8"});
        else
        return true;

    }
    createAcc()
    {
        if(this.isValid())
        {
            alert("You Have Created Account Successfully!!!");
            /*Note : Add the input fields' data to the database*/
        }
        else
        {
            this.isValid();
        }
    }
    render() {
        return (
            <div>
              <br/><br/><br/>
                <div className="OrgRegCss">
                <label htmlFor="org_id" >Organisation ID:  </label>
                <input id="org_id" type="text" placeholder="Enter Organisation ID..." onChange={(event)=>this.setState({org_id:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_name" >Organisation Name:   </label>
                <input id="org_name" type="text" placeholder="Enter Organisation Name..." onChange={(event)=>this.setState({org_name:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_type">Organisation Type:   </label>
                <input id="org_type" type="text" placeholder="Enter Organisation Type..." onChange={(event)=>this.setState({org_type:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_address">Address:   </label>
                <input id="org_address" type="text" placeholder="Enter Organisation Address..." onChange={(event)=>this.setState({org_address:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_contact">Contact No.:   </label>
                <input id="org_contact" type="tel" placeholder="Enter Organisation Contact No. ..." onChange={(event)=>this.setState({org_contact:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_email">Email:   </label>
                <input id="org_email" type="email" placeholder="Enter Organisation email..." onChange={(event)=>this.setState({org_email:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_user_name">User Name:  </label>
                <input id="org_user_name" type="text" placeholder="Enter User Name..." onChange={(event)=>this.setState({org_user_name:event.target.value})}/>
                <br/><br/>
                <label htmlFor="org_user_pwd">Password:  </label>
                <input id="org_user_pwd" type="password" placeholder="Enter password..." onChange={(event)=>this.setState({org_user_pwd:event.target.value})}/>
                <p id="validation">{this.state.genError} </p>
                <br/>
            <button id="btnOrgAcc" variant="primary" onClick={()=>this.createAcc()}>Create Account </button>
            </div >
            </div>
        )
    }
}
