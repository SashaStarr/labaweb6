import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink,VerticalLine } from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";
import Home from '../Home/Home';


  const Navigation = () => (

    <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/new" activeClassName="selected">New</NavLink>
        </li>
        <li>
          <NavLink exact to="/sale" activeClassName="selected">Sale</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/new">
          <div>New</div>
        </Route>
        <Route path="/sale">
          <div>sale</div>
        </Route>
        <Route path="/contact">
          <div>contact</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </LinkingWrapper>
  </Router>
  );
  export default Navigation;