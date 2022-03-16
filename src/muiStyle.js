import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: '#4d312c',
    h1: {
      fontFamily: `"Mitr",sans-serif`,
      fontWeight: 700,
      fontSize: 64
    },
    h2: {
      fontFamily: `"Mitr",sans-serif`,
      fontWeight: 700,
      fontSize: 44
    },
    h4: {
      fontFamily: `"Mitr",sans-serif`,
      fontWeight: 700,
      fontSize: 26
    },
    h5: {
      fontFamily: `"Mitr",sans-serif`,
      fontWeight: 700,
      fontSize: 24
    },
    p: {
      fontFamily: `"Raleway",sans-serif`
    },
    body1: {
      fontFamily: `"Raleway",sans-serif`,
      fontSize: 16
    },
    body2: {
      fontFamily: `"Raleway",sans-serif`,
      fontSize: 18
    },
    subtitle1: {
      fontFamily: `"Raleway",sans-serif`,
      fontSize: 20
    }
  }
});
