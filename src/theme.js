import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1098,
      lg: 1280,
      xl: 1920
    }
  },
  overrides: {
    MuiContainer: {
      disableGutters: true,
      root: {
        padding: 0
      }
    },
    MuiGrid: {
      root: {
        padding: "10px"
      },
      item: {
        padding: "10px !important"
      }
    }
  }
});

export default theme;
