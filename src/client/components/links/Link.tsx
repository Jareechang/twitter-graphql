import * as React from 'react';
import {
  useHistory,
} from 'react-router-dom';

import { CustomLink } from './styles';
import {
  LinkProps
} from './types';

const Link: React.FC<LinkProps> = (
  props
) => {
  const history = useHistory();
  const handleLinkClick = React.useCallback((e) => {
    e.preventDefault();
    if (props?.to) {
      history.push(props.to);
    }
  }, [props, history]);
  return (
    <CustomLink
      to={props?.to ?? '/'}
      onClick={handleLinkClick}>
      {props?.children ? props.children : null}
    </CustomLink>
  );
}

export default Link;
