import * as React from 'react';
import {
  UseBaseMutationResult
} from 'react-query';
import { Button } from '@app/client/components';
import {
  Box,
  TextField
} from '@mui/material';

import {
  CreateTweetMutation,
  CreateTweetMutationVariables,
  useCreateTweetMutation
} from '@app/graphql';
import { client } from '@app/client/external';

interface CreateTweetProps {}

const CreateTweet: React.FC<CreateTweetProps> = (
  props
) => {
  const [text, setText] = React.useState('');
  const createTweetMutation: UseBaseMutationResult<
    CreateTweetMutation,
    any,
    CreateTweetMutationVariables
    > = useCreateTweetMutation(
      client,
    );
  const handleSubmit = React.useCallback((e) => {
    if (text) {
      createTweetMutation.mutate({
        // Hard coded for now
        id: '1',
        content: text,
      });
    }
  }, [createTweetMutation]);
  const handleInputChange = React.useCallback((e) => {
    setText(e.target.value);
  }, [setText]);
  return (
    <Box>
      <TextField
        fullWidth
        id="outlined-multiline-flexible"
        label="What’s Happening ?"
        multiline
        rows={3}
        value={text}
        onChange={handleInputChange}
      />
      <Box pt={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={handleSubmit}
          variant="contained">
          Tweet
        </Button>
      </Box>
    </Box>
  );
}

export default CreateTweet;