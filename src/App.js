import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChildList from './components/child/child-list'
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { ModalCustom } from "reactstrap";
import LoginForm from "./components/auth/login/login"
export default () => (
  
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
    return (
          <LoginForm />
        
        );
    </div>
  </Router>
);
