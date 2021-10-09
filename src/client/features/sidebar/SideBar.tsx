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
      <Box mx={2} mr={4}>
        <MenuList sx={{ paddingTop: 0 }}>
          <Link to="/">
            <Box mb={2}>
              <MenuItem>
                <LinkText active={isActivePath('/')}>
                  Home
                </LinkText>
              </MenuItem>
            </Box>
          </Link>
          <Link to="/profile">
            <Box mb={2}>
              <MenuItem>
                <LinkText active={isActivePath('/profile')}>
                  Profile
                </LinkText>
              </MenuItem>
            </Box>
          </Link>
        </MenuList>
      </Box>
    </ContentLayout>
  );
}

export default SideBar;
