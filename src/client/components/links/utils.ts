import {
  getPrimaryColor
} from '@app/client/shared';

import {
  CustomLinkTextStyledProps
} from './types';

export const getTextColor = (
  props: CustomLinkTextStyledProps
) => {
  return props?.active
    ? getPrimaryColor<CustomLinkTextStyledProps>(props)
    : 'inherit';
}

export const getFontWeight = (
  props: CustomLinkTextStyledProps
) => {
  return props?.active ? 'bold' : 'inherit';
};
