import { grey, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: grey[200],
      paper: grey[50],
    },
    primary: {
      main: purple[200],
    },
    secondary: {
      main: grey[400],
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 18,
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            background: 'inherit',
            cursor: 'default',
          },
        },
      },
    },
  },
});

export { theme };
