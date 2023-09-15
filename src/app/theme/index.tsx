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
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
});

export { theme };
