import * as React from 'react';

import {
  CountText
} from './styles';

export interface TweetImpressionCountProps {
  count: number;
}

const TweetImpressionCount : React.FC<TweetImpressionCountProps> = (
  props
) => {
  if (!props?.count) return null;
  return (
    <CountText>{props.count}</CountText>
  );
}

export default TweetImpressionCount;
