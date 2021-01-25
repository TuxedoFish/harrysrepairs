// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import {
  Home,
  Terms,
  Game,
  Portfolio,
  Device
} from './pages'

// TODO: Why does it need to be imported here?
import 'semantic-ui-css/semantic.min.css'

export default function App() {

  return (
    <Router>
      <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/terms" component={Terms} />
              <Route path="/game" component={Game} />
              <Route path="/device/:deviceId" component={Device} />
              <Route path="/portfolio" component={Portfolio} />
              {/* <Route path="/phone/:index">
                  <PhonePage />
              </Route> */}
          </Switch>
      </div>
    </Router>
  );
}