import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, Weather } from './components/organisms';

const App = () => {
  const appMetaData = {
    input: {
      label: 'Enter City',
      value: ''
    },
    btn: {
      text: 'Submit'
    },
    moreInfoBtn: {
      text: 'Show 5 Days ForeCast'
    }

  }

  return <div className="container">
    <Router>
      <h2>Weather App</h2>
      <Switch>
        <Route path="/" exact>
          <Home {...appMetaData} />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </div>

}


export default App;
