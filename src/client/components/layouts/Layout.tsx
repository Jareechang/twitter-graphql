import * as React from 'react';
import {
  Container,
  Box
} from '@mui/material';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (
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

export default Layout;
