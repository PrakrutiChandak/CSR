import React, { Fragment } from 'react';
import Form from './Form';
import Events from './Events'

export default function dashboard() {
    return (
        <Fragment>
            <Form />
            <Events />
        </Fragment>
    )
}
