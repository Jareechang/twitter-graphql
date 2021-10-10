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
  HomePage,
  ProfilePage,
  ViewTweetPage,
} from '@app/client/pages';

import {
  SideBar
} from '@app/client/features/sidebar';
import {
  Trending
} from '@app/client/features/trending';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = (
  props
) => {
  return (
    <Router history={history}>
      <Grid container>
        <Grid item md={2}>
          <SideBar />
        </Grid>
        <Grid item md={6} xs={12}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/tweets/:id">
              <ViewTweetPage />
            </Route>
          </Switch>
        </Grid>
        <Grid item md={4}>
          <Trending />
        </Grid>
      </Grid>
    </Router>
  );
}

export default Routes;
