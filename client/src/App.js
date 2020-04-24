import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRouter from './components/PrivateRouter';
import BubblePage from './components/BubblePage';
import LoaderPage from './components/LoaderPage';

import './styles.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    {' '}
                    <h1>Welcome to the Bubble App!</h1>
                </header>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRouter
                        exact
                        path="/protected"
                        component={BubblePage}
                    />
                    <PrivateRouter
                        exact
                        path="/loader"
                        component={LoaderPage}
                    />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
