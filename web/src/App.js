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

// All CSS Files
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/skeleton.css'
import './css/normalize.css'
import './css/custom.scss'

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