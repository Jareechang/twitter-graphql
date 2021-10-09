import * as React from 'react';
import {
  Box
} from '@mui/material';

interface ContentLayoutProps {
  children: React.ReactNode
}

const ContentLayout: React.FC<ContentLayoutProps> = (
  props
) => {
  return (
    <Box py={4}>
      {props ? props.children : null}
    </Box>
  );
}

export default ContentLayout;
