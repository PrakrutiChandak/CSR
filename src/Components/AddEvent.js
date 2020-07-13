import React, { Component } from 'react'
import '../Components/FormStyle.css'
export default class AddEvent extends Component {
    render() {
        return (
                <div>
                    <br/><br/><br/><br/>
                <div className="AddEventCss">
      <label htmlFor="event_id">Event ID:  </label>
      <input id="event_id" type="text" />
 <br/><br/>
      <label htmlFor="event_name">Event Name:   </label>
      <input id="event_name" type="text" />
<br/><br/>

      <label htmlFor="event_desc">Event Description:   </label>
      <input id="event_desc" type="text" />
<br/><br/>
      <label htmlFor="org_id">Organiser ID:   </label>
      <input id="org_id" type="text" />
      <br/><br/>
      <label htmlFor="no_of_participants">No. Of Participants Allowed:   </label>
      <input id="o_of_participants" type="number" />
      <br/><br/>
      <label htmlFor="start_date">Start Date:   </label>
      <input id="start_date" type="date" />
      <br/><br/>
      <label htmlFor="end_date">End Date:  </label>
      <input id="end_date" type="date" />
      <br/><br/>
      <label htmlFor="reg_start_date">Registration start Date:  </label>
      <input id="reg_start_date" type="date" />
      <br/><br/>
      <label htmlFor="reg_end_date">Registration end Date:  </label>
      <input id="reg_end_date" type="date" />
      <br/><br/>
      <label htmlFor="venue">Venue:  </label>
      <input id="venue" type="date" />
      <br/><br/>
      <button variant="primary"> Publish And Invite </button>
    </div>
</div>
        )
    }
}
