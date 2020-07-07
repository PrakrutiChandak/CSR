import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents, deleteEvent } from '../../actions/events';

export class Events extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired,
        getEvents: PropTypes.func.isRequired,
        deleteEvent: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        return (
            <Fragment>
                <h2>Events</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Description </th>
                            <th> Registration Start </th>
                            <th> Registration End </th>
                            <th> Start of the Event </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.events.map(events => (
                            <tr key={events.id}>
                                <td>{events.event_name}</td>
                                <td>{events.event_description}</td>
                                <td>{events.start_date_reg}</td>
                                <td>{events.end_date_reg}</td>
                                <td>{events.start_date_event}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteEvent.bind(this, events.id)}
                                        className='btn btn-danger btn-sm'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    events: state.events.events
});

export default connect(mapStateToProps, { getEvents, deleteEvent })
    (Events);
