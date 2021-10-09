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

import TweetImpressionCount from './TweetImpressionCount';

import {
  UsernameText,
  TwitterhandleText,
  FavoritedIcon,
} from './styles';

export interface TweetProps {
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

  likes?: number;
  comments?: number;
  retweets?: number;
}

const Tweet: React.FC<TweetProps> = (
  props
) => {
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    if (props && props.likes && props.likes > 0) {
      setLiked(true);
    }
  }, [setLiked, props])

  const handleRouteToComments = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('handle routing to comments with tweet id');
  }, []);

  const handleRetweet = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    // Increment the retweet count by one using tweet id
    console.log('handle retweet');
  }, []);

  const handleLiked = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    // Transition the UI icon (filled heart)
    setLiked(true);
    // Increment the like count by one using tweet id
    console.log('handle tweet liked');
  }, [setLiked]);

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
            <TweetImpressionCount
              count={props?.comments ?? 0}
            />
          </IconButton>
          <IconButton onClick={handleRetweet}>
            <RepeatIcon />
            <TweetImpressionCount
              count={props?.retweets ?? 0}
            />
          </IconButton>
          <IconButton onClick={handleLiked}>
            {liked ? <FavoritedIcon /> : <FavoriteIcon />}
            {liked && (
              <TweetImpressionCount
                count={props?.likes ?? 0}
              />
            )}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default Tweet;
