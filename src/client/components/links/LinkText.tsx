import * as React from 'react';
import { CustomLinkText } from './styles';
import {
  LinkTextProps
} from './types';

const LinkText: React.FC<LinkTextProps> = (
  props
) => {
  return (
    <CustomLinkText {...props}>
      {props?.children ? props.children : null}
    </CustomLinkText>
  );
}

export default LinkText;
