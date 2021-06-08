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
const OnPageChange = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)

    // Trigger google analytics event in production
    if(process.env.NODE_ENV==="production") {
      window.gtag("config", process.env.GOOGLE_ANALYTICS_ID, {
        page_title: pathname,
        page_path: pathname
      });
    }
  }, [pathname])

  return null
}

const App = () => {
  return (
    <FacebookProvider appId="140005087951381">
      <Router>
        <OnPageChange />
        <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/terms" component={Terms} />
                <Route path="/game" component={Game} />
                <Route path="/device/:deviceName" component={Device} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </div>
      </Router>
    </FacebookProvider>
  );

}

export default App