import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import loadable from '@loadable/component';
import './tailwind.css';
import IndexPage from './App';
import * as serviceWorker from './serviceWorker';


const VisionAndMission = loadable(() => import('./pages/VisionAndMission'));

const App = () => (
  <Router>
    <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/visi-misi">
          <VisionAndMission />
        </Route>
        <Route path="*">
          <p>Not Found</p>
        </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const isProduction = ('production' === process.env.REACT_APP_ENV);

console.log(isProduction);

if (isProduction) {
    serviceWorker.register();
}