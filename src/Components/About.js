import React, { Component } from 'react'
import NavSample from './NavSample'
import '../Components/EventStyles.css'
export default class About extends Component {
    render() {
        return (
            <div>
                <NavSample/>
                <div className="AboutStyle">
                <br/><br/>
                <h1>About CSR Management</h1>
                <p>
                Corporate social responsibility (CSR) is a type of international private business self-regulation that aims to contribute to societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.
                While once it was possible to describe CSR as an internal organisational policy or a corporate ethic strategy,that time has passed as various international laws have been developed and various organisations have used their authority to push it beyond individual or even industry-wide initiatives.
                 While it has been considered a form of corporate self-regulation for some time, over the last decade or so it has moved considerably from voluntary decisions at the level of individual organisations, to mandatory schemes at regional, national and international levels.
                </p>
                </div>
            </div>
        )
    }
}
