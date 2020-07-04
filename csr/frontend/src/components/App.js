import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import dashboard from './events/dashboard';

class App extends Component {
    render() {
        return(
           <Fragment>
               <Header />
               <div className="container">
                <dashboard />
               </div>
           </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
