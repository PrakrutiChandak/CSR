import React, { Component } from 'react'
import '../Components/FormStyle.css'
export default class AddEvent extends Component {
    constructor()
    {
        super();
        this.state=
        {
            event_id:"",
            event_name:"",
            event_desc:"",
            org_id:"",
            no_of_participants:"",
            start_date:"",
            end_date:"",
            reg_start_date:"",
            reg_end_date:"",
            venue:"",
            genError:""
        }
    }
    EventValid()
    {
        if(this.state.event_id.length<1)
        this.setState({genError:"Empty field: Event ID"});
        else if(this.state.event_name.length<1)
        this.setState({genError:"Empty field: Event Name"});
        else if(this.state.event_desc.length<1)
        this.setState({genError:"Empty field: Event Description"});
        else if(this.state.org_id.length<1)
        this.setState({genError:"Empty field: Organisation ID"});
        else if(this.state.no_of_participants.length<1)
        this.setState({genError:"Empty or Invalid field: No. of Participants"});
        else if(this.state.start_date.length<1)
        this.setState({genError:"Empty field: Start Date"});
        else if(this.state.end_date.length<1)
        this.setState({genError:"Empty field: End Date"});
        else if(this.state.reg_start_date.length<1)
        this.setState({genError:"Empty field: Reg. Start Date"});
        else if(this.state.reg_end_date.length<1)
        this.setState({genError:"Empty field: Reg End Date"});
        else if(this.state.venue.length<1)
        this.setState({genError:"Empty field: Venue"});
        else
        return true;
    }
    addEvent()
    {
        if(this.EventValid())
        {
            alert("Added Event Successfully");
             /*Note : Add the input fields' data to the database*/
        }
        else
        {
            this.EventValid();
        }
    }

    render() {
        return (
                <div>
                    <br/>
                <div className="AddEventCss">
      <label htmlFor="event_id">Event ID:  </label>
      <input id="event_id" type="text" onChange={(event)=>this.setState({event_id:event.target.value})}/>
 <br/><br/>
      <label htmlFor="event_name">Event Name:   </label>
      <input id="event_name" type="text" onChange={(event)=>this.setState({event_name:event.target.value})}/>
<br/><br/>

      <label htmlFor="event_desc">Event Description:   </label>
      <input id="event_desc" type="text" onChange={(event)=>this.setState({event_desc:event.target.value})}/>
<br/><br/>
      <label htmlFor="org_id">Organiser ID:   </label>
      <input id="org_id" type="text" onChange={(event)=>this.setState({org_id:event.target.value})}/>
      <br/><br/>
      <label htmlFor="no_of_participants">Participants Allowed:   </label>
      <input id="o_of_participants" type="number" onChange={(event)=>this.setState({no_of_participants:event.target.value})}/>
      <br/><br/>
      <label htmlFor="start_date">Start Date:   </label>
      <input id="start_date" type="date" onChange={(event)=>this.setState({start_date:event.target.value})}/>
      <br/><br/>
      <label htmlFor="end_date">End Date:  </label>
      <input id="end_date" type="date" onChange={(event)=>this.setState({end_date:event.target.value})}/>
      <br/><br/>
      <label htmlFor="reg_start_date">Reg. start Date:  </label>
      <input id="reg_start_date" type="date" onChange={(event)=>this.setState({reg_start_date:event.target.value})}/>
      <br/><br/>
      <label htmlFor="reg_end_date">Reg. end Date:  </label>
      <input id="reg_end_date" type="date" onChange={(event)=>this.setState({reg_end_date:event.target.value})}/>
      <br/><br/>
      <label htmlFor="venue">Venue:  </label>
      <input id="venue" type="text" onChange={(event)=>this.setState({venue:event.target.value})}/>
      <br/>
      <p id="validation">{this.state.genError}</p>
      <br/>
      <button id="pubNInvite" variant="primary" onClick={()=>this.addEvent()}> Publish And Invite </button>
    </div>
</div>
        )
    }
}
