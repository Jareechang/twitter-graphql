import * as React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { history } from '@app/client/routes';
import {
  Home,
  Profile
} from '@app/client/pages';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = (
  props
) => {
  return (
    <Router history={history}>
      <Link to="/profile">Profile</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
