import * as React from 'react';

import {
  Box,
  Card,
  IconButton,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import {
  UsernameText,
  TwitterhandleText,
  FavoritedIcon,
} from './styles';

export interface FeedCardProps {
  /*
   *  ID of the tweet
   * */
  id: string;
  /*
   *  user name
   * */
  username: string;
  /*
   *  tweet content
   * */
  content: string;
}

const FeedCard: React.FC<FeedCardProps> = (
  props
) => {
  const [liked, setLiked] = React.useState(false);

  const handleRouteToComments = React.useCallback(() => {
    console.log('handle routing to comments with tweet id');
  }, []);

  const handleRetweet = React.useCallback(() => {
    // Increment the retweet count by one using tweet id
    console.log('handle retweet');
  }, []);

  const handleLiked = React.useCallback(() => {
    // Transition the UI icon (filled heart)
    setLiked(true);
    // Increment the like count by one using tweet id
    console.log('handle tweet liked');
  }, []);

  return (
    <Card sx={{ border: '1px solid' }} elevation={0}>
      <CardContent>
        <Box>
          <UsernameText>{props?.username ?? null}</UsernameText>
          <TwitterhandleText>
            {props?.username ? `@${props?.username}` : null}
          </TwitterhandleText>
        </Box>
        <Box py={2}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom>
            {props?.content ?? null}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box p={1}>
          <IconButton onClick={handleRouteToComments}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton onClick={handleRetweet}>
            <RepeatIcon />
          </IconButton>
          <IconButton onClick={handleLiked}>
            {liked ? <FavoritedIcon /> : <FavoriteIcon />}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default FeedCard;
