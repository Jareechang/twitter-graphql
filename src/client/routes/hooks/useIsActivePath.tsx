import * as React from 'react';
import {
  useLocation,
} from 'react-router-dom';

const useIsActivePath = (path: string) => {
  const location = useLocation();
  const pathname = location?.pathname ?? '';

  const isActivePath = React.useCallback((path, options) => {
    if (!pathname) return false;
    return pathname === path;
  }, [location, path]);

  return {
    isActivePath
  };
}

export default useIsActivePath;
