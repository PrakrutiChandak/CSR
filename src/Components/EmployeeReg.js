import React, { Component} from 'react'
import '../Components/FormStyle.css'
import { Redirect } from 'react-router-dom'
export default class EmployeeReg extends Component {
    constructor()
    {
        super();
        this.state={
            emp_id:"",
            emp_name:"",
            gender:"",
            emp_dob:"",
            emp_age:"",
            emp_doj:"",
            emp_tenure:"",
            emp_email:"",
            emp_contact:"",
            emp_user:"",
            emp_pwd:"",
            genError:"",
            redirect:false,
            logMe:""
        }
    }
    logMeBack=()=>
    {
        if (this.state.logMe)
        {
         return<Redirect to="/Login"/>
       }
    }
    renderRedirect = () => {
        if (this.state.redirect)
         {
          return<Redirect to="/Home"/>
        }
    }
    setRedirect = () => {
        this.setState({
          logMe: true
        })
      }
    isValid()
    {
        if(this.state.emp_id.length<1)
        this.setState({genError:"Empty Field: Employee id"});
        else if(this.state.emp_name.length<1)
        this.setState({genError:"Empty Field: Employee Name"});
        else if(this.state.emp_dob.length<1)
        this.setState({genError:"Empty field: Date of Birth"});
        else if(this.state.emp_age.length<2)
        this.setState({genError:"Empty Field: Employee Age"});
        else if(this.state.emp_doj.length<2)
        this.setState({genError:"Empty Field: Date of joining"});
        else if(this.state.emp_tenure.length<1)
        this.setState({genError:"Empty Field: Employee Tenure"});
        else if(this.state.emp_email.length<1)
        this.setState({genError:"Empty Field: Employee email"});
        else if(this.state.emp_contact.length!=10)
        this.setState({genError:"Empty or Invalid Field: Contact No."});
        else if(this.state.emp_user.length<1)
        this.setState({genError:"Empty Field: User Name"});
        else if(this.state.emp_pwd.length<1)
        this.setState({genError:"Password length should be > 8"});
        else
        return true;

    }
    validite()
    {
        if(this.isValid())
        {
            alert("You have registered Successfully!!!");
            this.setState({redirect:"true"})
        }
        else
        {
            this.isValid();
        }
    }
    render() {
            return (
            <div className="EmpRegContainer">
                <br/><br/><br/>
                <h1 id="headEmpReg">Employee Registration Page</h1>
                <label htmlFor="emp_id" >Employee ID:  </label>
                <input id="emp_id" type="text" placeholder="Enter Employee ID..." onChange={(event)=>this.setState({emp_id:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_name" >Employee Name:  </label>
                <input id="org_id" type="text" placeholder="Enter Employee name..." onChange={(event)=>this.setState({emp_name:event.target.value})}/>
                <br/><br/>
                <label>Gender :</label>
                <input id="genderRadioBtn_M" type="radio" name="Gender" value="Male"/>
                <label id="lblGender">Male</label>
                <input id="genderRadioBtn_F" type="radio" name="Gender" value="Female" />
                    <label id="lblGender">Female</label>
                    <input id="genderRadioBtn_F" type="radio" name="Gender" value="Other"/>
                    <label id="lblGender">Other</label>
                    
                    <br/><br/>
                <label htmlFor="emp_dob" >Date-Of-Birth:  </label>
                <input id="emp_dob" type="date" placeholder="Enter Date Of Birth..." onChange={(event)=>this.setState({emp_dob:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_age" >Age :  </label>
                <input id="emp_age" type="number" placeholder="Enter Age..." onChange={(event)=>this.setState({emp_age:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_doj" >Date of Joining :  </label>
                <input id="emp_doj" type="date" placeholder="Enter Date of Joining..." onChange={(event)=>this.setState({emp_doj:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_tenure" >Tenure :  </label>
                <input id="emp_tenure" type="number" placeholder="Enter Tenure..." onChange={(event)=>this.setState({emp_tenure:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_email" >Email :  </label>
                <input id="emp_email" type="email" placeholder="Enter email..." onChange={(event)=>this.setState({emp_email:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_contact" >Contact No. :  </label>
                <input id="emp_contact" type="tel" placeholder="Enter Contact No..." onChange={(event)=>this.setState({emp_contact:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_user" >User Name :  </label>
                <input id="emp_user" type="text" placeholder="Enter User Name..." onChange={(event)=>this.setState({emp_user:event.target.value})}/>
                <br/><br/>

                <label htmlFor="emp_pwd" >Password :  </label>
                <input id="emp_pwd" type="password" placeholder="Enter password..." onChange={(event)=>this.setState({emp_pwd:event.target.value})}/>
               <br/>
                <p id="validation">{this.state.genError}</p>
                <br/>
                <button id="btnEmpReg" variant="primary" onClick={()=>this.validite()}>Create Account </button>
                {this.renderRedirect()}
                <br/>
                <p id="loginMsg">Already Have An Account???</p>
                <br/>
                <button id="btnEmpReg" variant="primary" onClick={this.setRedirect}>Login</button>
                {this.logMeBack()}
            </div>
        )
    }
}
