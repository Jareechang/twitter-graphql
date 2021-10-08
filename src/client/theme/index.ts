import { Theme, createTheme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#1da1f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

console.log('theme: ', theme);

export default theme;
