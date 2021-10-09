import * as React from 'react';
import {
  Box,
  MenuList,
  MenuItem,
} from '@mui/material';
import { useIsActivePath } from '@app/client/routes';
import { Link, LinkText, ContentLayout } from '@app/client/components';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = (
  props
) => {
  const {
    isActivePath = () => false
  } = useIsActivePath();
  return (
    <ContentLayout>
      <Box mx={2}>
        <MenuList>
          <Link to="/">
            <MenuItem>
              <LinkText active={isActivePath('/')}>
                Home
              </LinkText>
            </MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem>
              <LinkText active={isActivePath('/profile')}>
                Profile
              </LinkText>
            </MenuItem>
          </Link>
        </MenuList>
      </Box>
    </ContentLayout>
  );
}

export default SideBar;
