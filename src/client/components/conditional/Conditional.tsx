import * as React from 'react';
//import { Maybe } from '@app/types';

export interface renderFunction {
  () : JSX.Element;
}

export interface ConditionalProps {
  show: boolean;
  render?: renderFunction;
  children: JSX.Element;
}

const Conditional : React.FC<ConditionalProps> = (
  props
) => {
  const {
    show = false,
    children = null,
    render,
  } = props;
  if (!show) return null;
  if (children) return children;
  if (render && typeof render === 'function') {
    return render();
  }
  return children;
}

export default Conditional;
