import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChildList from './components/child/child-list'
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { ModalCustom } from "reactstrap";
import LoginForm from "./components/auth/login/login";
import Store from "./store";

export default () => (
  <Store>
      <Entry />
  </Store>
);
const Entry = (props)=>{
  const user = localStorage.getItem("user");
  if(!user){
    return <LoginForm {...props}/>
  }
  else{
    return(
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
    )
  }
}