import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import ProfileView from "../Routes/ProfileView";

const LoggedInRoutes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/explore" component={Explore} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={ProfileView} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn, toggleLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes toggleLoggedIn={toggleLoggedIn} />}</Switch>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
