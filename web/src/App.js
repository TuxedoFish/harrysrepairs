// React imports
import React, { useEffect } from "react";

// Router
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages — new single-page portfolio (redesign)
import Portfolio from './redesign/pages/Portfolio'

// Legacy repairs site — frozen point-in-time copy, served from its own
// isolated module so the portfolio redesign can't regress it.
import Home from './legacy/pages/Home'
import Device from './legacy/pages/Device'

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
                {/* Portfolio is now front and center on the landing route. */}
                <Route exact path="/" component={Portfolio} />
                {/* The repair site lives here, off the main nav, linked from the portfolio. */}
                <Route path="/repairs" component={Home} />
                <Route path="/device/:deviceName" component={Device} />
                {/* Keep old /portfolio links working. */}
                <Redirect from="/portfolio" to="/" />
            </Switch>
        </div>
      </Router>
    </FacebookProvider>
  );

}

export default App