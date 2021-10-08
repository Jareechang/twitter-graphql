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
  useCreateTweetMutation,
} from '@app/graphql';
import { client } from '@app/client/external';

import { useFeedListState } from '@app/client/features/feed';

interface CreateTweetProps {}

const CreateTweet: React.FC<CreateTweetProps> = (
  props
) => {
  // TODO Hard coded for now, refactor later with auth
  const userId: string = '1';
  const userName: string = 'Alice';
  const [text, setText] = React.useState('');
  const feedListState = useFeedListState();

  const createTweetMutation: UseBaseMutationResult<
    CreateTweetMutation,
    any,
    CreateTweetMutationVariables
    > = useCreateTweetMutation(
      client,
      {
        onMutate: () => {
          feedListState.cancelQueries();
          const previousFeedList = feedListState.get();
          feedListState.update({
            content: text,
            user: {
              id: userId,
              name: userName
            }
          });
          setText('');
          return previousFeedList;
        },
        onError: () => {
          console.error(
            'There was an error'
          );
        },
        onSuccess: () => {
          feedListState.invalidateQueries('fetchFeedList');
        }
      }
    );

  const handleSubmit = React.useCallback((e) => {
    if (text) {
      createTweetMutation.mutate({
        id: userId,
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
