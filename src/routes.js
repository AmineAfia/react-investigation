import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GitList from './components/git-list';
import About from './components/about';
import Widgets from './components/widgets';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={GitList}/>
        <Route path="/widgets" component={Widgets} />
        <Route path="/git" component="GitList" />
        <Route path="/about" component={About} />
    </Route>
);