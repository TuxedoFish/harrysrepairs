// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from "./pages/Home.js"
import Terms from "./pages/Terms.js"
import Phone from "./pages/Phone.js"
import Polls from "./pages/Polls.js"

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
                <Route path="/polls" component={Polls} />
                {/* <Route path="/phone/:index">
                    <PhonePage />
                </Route> */}
            </Switch>
        </div>
    </Router>
  );
}

function HomePage() {
    return <Home/>;
}

function TermsPage() {
    return <Terms/>
}

function PhonePage() {
    let { index } = useParams();
    return <Phone index={index} />
}