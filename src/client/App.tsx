import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
//import { Button } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import theme from '@app/client/theme';
import { AppLayout } from '@app/client/components'

import { Routes } from '@app/client/routes';

interface AppProps {}

const queryClient = new QueryClient();

const App: React.FC<AppProps> = (
  props
) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
