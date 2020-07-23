import React, { Component } from 'react'
import '../Components/FormStyle.css'
export default class Report_Generation extends Component {
    render() {
        return (
            <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="Report_Gen_css">
                 <label htmlFor="event_id">Event Name:   </label>
                 <input id="event_id" type="text" />
                 <br/><br/>
                 <label htmlFor="no_of_participants">No. of registered participants:   </label>
                 <input id="no_of_participants" type="number" />
                 <br/><br/>
                 <label htmlFor="no_of_attendees">No. of attendees:   </label>
                 <input id="no_of_attendees" type="number" />
                 <br/><br/>
                 <label htmlFor="criteria">Criteria:   </label>
                 <input id="criteria" type="textarea" />
                 <br/><br/>
                 <label htmlFor="event_summary">Event Summary:   </label>
                 <input id="event_summary" type="textarea" aria-rowcount="3"/>
                 <br/><br/>
                 <button variant="primary">Generate Report </button>
                 </div>
            </div>
        )
    }
}
