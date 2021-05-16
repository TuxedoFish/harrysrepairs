// React imports
import React, { useEffect } from "react";

// Router
import {
  BrowserRouter as Router,
  useLocation,
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

// Facebook Provider
import { FacebookProvider } from 'react-facebook';

// TODO: Why does it need to be imported here?
import 'semantic-ui-css/semantic.min.css'

// Ensures always goes to top of page on load
const ScrollToTop = () => {

  const { pathname } = useLocation()

  console.log(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("scroll to top...")
  }, [pathname])

  return null

}

const App = () => {
  return (
    <FacebookProvider appId="140005087951381">
      <Router>
        <ScrollToTop />
        <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/terms" component={Terms} />
                <Route path="/game" component={Game} />
                <Route path="/device/:deviceName" component={Device} />
                <Route path="/portfolio" component={Portfolio} />
                {/* <Route path="/phone/:index">
                    <PhonePage />
                </Route> */}
            </Switch>
        </div>
      </Router>
    </FacebookProvider>
  );

}

export default App