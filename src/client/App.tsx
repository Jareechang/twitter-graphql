import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  Users
} from '@app/client/components'

interface AppProps {}

const queryClient = new QueryClient();

const App: React.FC<AppProps> = (
  props
) => {
  return (
     <QueryClientProvider client={queryClient}>
       <div>
         <Users />
       </div>
     </QueryClientProvider>
  );
}

export default App;
