import * as React from 'react';

import {
  Card,
  CardContent,
} from '@mui/material';

export interface CommentListProps {}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <Card sx={{ border: '1px solid' }} elevation={0}>
      <CardContent>
        <div>comment list</div>
      </CardContent>
    </Card>
  );
}

export default CommentList;
