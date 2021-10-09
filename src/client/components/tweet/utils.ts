import * as React from 'react';
import { Maybe } from '@app/types';

export const getTextOrChildren = (
  text: string,
  children: React.ReactNode
): Maybe<string | React.ReactNode> => {
  if (children) return children;
  if (text) return text;
  return null;
}
