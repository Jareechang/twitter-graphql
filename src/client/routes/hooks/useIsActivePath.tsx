import * as React from 'react';
import {
  useLocation,
} from 'react-router-dom';

const useIsActivePath = () => {
  const location = useLocation();
  const pathname = location?.pathname ?? '';

  const isActivePath = React.useCallback((path: string) => {
    if (!pathname) return false;
    return pathname === path;
  }, [location, pathname]);

  return {
    isActivePath
  };
}

export default useIsActivePath;
