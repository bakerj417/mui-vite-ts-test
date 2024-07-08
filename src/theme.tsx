import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(41, 130, 0, 1)',
    },
  },
  typography: {
    fontFamily: '"Proxima Nova"',
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      textShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 0px',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          appearance: 'button',
          backgroundImage: 'none',
          borderRadius: '4px',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderStyle: 'solid',
          borderWidth: '1px',
          boxShadow: 'none',
          display: 'flex',
          padding: '4px 16px',
          minWidth: 'unset',
          width: '63.125px',
          height: '32px',
          ":hover": {
            backgroundColor: 'rgb(29, 92, 0, 1)',
            boxShadow: 'none',
          }
        },
      },
    },
  },
});

export default theme;
