import * as React from 'react';
import {
  Container,
  Box
} from '@mui/material';

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (
  props
) => {
  return (
    <Container fixed>
      <Box my={8}>
        {props ? props.children : null}
      </Box>
    </Container>
  );
}

export default AppLayout;
