import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login1";
import SignUp from "./components/signup.component";
import Homepage  from "./components/homepage";
import Search from "./components/Search";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TOS from "./components/TOS";
import BusinessAdd from "./components/BusinessAdd";
import wrappermsearch from "./components/wrappermsearch";
import wrapperpsearch from "./components/wrapperpsearch";
import wrappervsearch from "./components/wrappervsearch";
import wrapperesearch from "./components/wrapperesearch";
import wrapperksearch from "./components/wrapperksearch";
function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Login} />
          </Switch>
        </div>
        <Route path="/search" component={Search} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/tos" component={TOS} />
        <Route path="/add-business" component={BusinessAdd} />
        <Route path="/mechanic" component={wrappermsearch} />
        <Route path="/plumber" component={wrapperpsearch} />
        <Route path="/vegetable_vendor" component={wrappervsearch} />
        <Route path="/electrician" component={wrapperesearch} />
        <Route path="/kirana-store" component={wrapperksearch} />
      </div>
    </div></Router>
  );
}

export default App;
