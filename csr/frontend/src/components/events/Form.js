import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEvent } from '../../actions/events';


export class Form extends Component {

    state = {
        event_name: '',
        event_id: '',
        organizer_id: '',
        event_description: '',
        nof_participants: '',
        start_date_reg: '',
        end_date_reg: '',
        start_date_event: '',
        end_date_event: ''
    }

    static propTypes = {
        addEvent: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const {
            event_name,
            event_id,
            organizer_id,
            event_description,
            nof_participants,
            start_date_reg,
            end_date_reg,
            start_date_event,
            end_date_event
        } = this.state;

        const event = {
            event_name,
            event_id,
            organizer_id,
            event_description,
            nof_participants,
            start_date_reg,
            end_date_reg,
            start_date_event,
            end_date_event
        };
        this.props.addEvent(event);

    };

    render() {
        const {
            event_name,
            event_id,
            organizer_id,
            event_description,
            nof_participants,
            start_date_reg,
            end_date_reg,
            start_date_event,
            end_date_event
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Event</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="event_name"
                            onChange={this.onChange}
                            value={event_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>id</label>
                        <input
                            className="form-control"
                            type="text"
                            name="event_id"
                            onChange={this.onChange}
                            value={event_id}
                        />
                    </div>
                    <div className="form-group">
                        <label>org_id</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="organizer_id"
                            onChange={this.onChange}
                            value={organizer_id}
                        />
                    </div>
                    <div className="form-group">
                        <label>description</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="event_description"
                            onChange={this.onChange}
                            value={event_description}
                        />
                    </div>
                    <div className="form-group">
                        <label>no_of_participants</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="nof_participants"
                            onChange={this.onChange}
                            value={nof_participants}
                        />
                    </div>
                    <div className="form-group">
                        <label>start_date_reg</label>
                        <textarea
                            className="form-control"
                            type="date"
                            name="start_date_reg"
                            onChange={this.onChange}
                            value={start_date_reg}
                        />
                    </div>
                    <div className="form-group">
                        <label>end_date_reg</label>
                        <textarea
                            className="form-control"
                            type="date"
                            name="end_date_reg"
                            onChange={this.onChange}
                            value={end_date_reg}
                        />
                    </div>
                    <div className="form-group">
                        <label>start_date_event</label>
                        <textarea
                            className="form-control"
                            type="date"
                            name="start_date_event"
                            onChange={this.onChange}
                            value={start_date_event}
                        />
                    </div>
                    <div className="form-group">
                        <label>end_date_event</label>
                        <textarea
                            className="form-control"
                            type="date"
                            name="end_date_event"
                            onChange={this.onChange}
                            value={end_date_event}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            className="btn btn-primary">
                            Submit
                </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addEvent })(Form);
