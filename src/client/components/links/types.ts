import {
  StyledProps
} from 'styled-components';

export interface LinkProps {
  to?: string;
  children: React.ReactNode;
}

export interface LinkTextProps {
  children: React.ReactNode;
  active?: boolean;
}

export type CustomLinkStyledProps = StyledProps<LinkProps>;
export type CustomLinkTextStyledProps = StyledProps<LinkTextProps>;
