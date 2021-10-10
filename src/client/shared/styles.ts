import get from 'lodash.get';

export const getTheme = <Props = unknown>(props: Props) => {
  return get(props, 'theme');
}
export const getPalette = <Props = unknown>(props: Props) => {
  return get(props, 'theme.palette');
}
export const getPrimaryColor = <Props = unknown>(props: Props) => {
  return get(getPalette<Props>(props), 'primary.main');
}
export const getTextColor = <Props = unknown>(type: string, props: Props) => {
  return get(getPalette<Props>(props), `text.${type}`);
}
