import * as React from 'react';
import {
  Grid
} from '@mui/material';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { history } from '@app/client/routes';
import {
  Home,
  Profile,
  ViewTweet,
} from '@app/client/pages';

import {
  SideBar
} from '@app/client/features/sidebar';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = (
  props
) => {
  return (
    <Router history={history}>
      <Grid container>
        <Grid item md={3}>
          <SideBar />
        </Grid>
        <Grid item md={6} xs={12}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/tweets/:id">
              <ViewTweet />
            </Route>
          </Switch>
        </Grid>
        <Grid item md={3}>
          Trending side bar goes here
        </Grid>
      </Grid>
    </Router>
  );
}

export default Routes;
