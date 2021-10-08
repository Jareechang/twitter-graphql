import * as React from 'react';

import {
  Box,
  Grid,
} from '@mui/material';
import { CreateTweet } from '@app/client/features/tweet';

interface HomePageProps {}

const Home: React.FC<HomePageProps> = (
  props
) => {
  return (
    <Box>
      <Grid container>
        <Grid item md={8}>
          <Box py={4}>
            <CreateTweet />
            <Box>
              User’s feed goes here
            </Box>
          </Box>
        </Grid>
        <Grid item md={4}>
          Trending side bar goes here
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
