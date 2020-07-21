import React, { Component } from 'react'
import '../Components/FormStyle.css'
export default class OrgRegistration extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/><br/><br/>
            <div className="OrgRegCss">
                <label htmlFor="org_id">Organisation ID:  </label>
                <input id="org_id" type="text" />
                <br/><br/>
                <label htmlFor="org_name">Organisation Name:   </label>
                <input id="org_name" type="text" />
                <br/><br/>
                <label htmlFor="org_type">Organisation Type:   </label>
                <input id="org_type" type="text" />
                <br/><br/>
                <label htmlFor="org_address">Address:   </label>
                <input id="org_address" type="text" />
                <br/><br/>
                <label htmlFor="org_contact">Contact No.:   </label>
                <input id="org_contact" type="number" />
                <br/><br/>
                <label htmlFor="org_email">Email:   </label>
                <input id="org_email" type="email" />
                <br/><br/>
                <label htmlFor="org_user_name">User Name:  </label>
                <input id="org_user_name" type="text" />
                <br/><br/>
                <label htmlFor="org_user_pwd">Password:  </label>
                <input id="org_user_pwd" type="password" />
                <br/><br/>
            <button variant="primary">Create Account </button>
            </div >
            </div>
        )
    }
}
