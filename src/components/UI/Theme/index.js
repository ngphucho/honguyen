import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const dark = grey[900];
const light = grey[400];

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    common: {
      dark: dark,
      light: light,

      // background
      bg1: "#e0e0e0",
      bg2: "#bdbdbd",

      // text
      textColor1: "#bdbdbd",

      // space
      // row spacing
      row: {
        "&:not(:last-child)": {
          marginBottom: 20,
        },
      },
    },
    primary: {
      main: dark,
      default: "#000",
    },
    secondary: {
      main: "#fff",
      transparent50: alpha(light, 0.4),
    },
    background: {
      default: dark,
    },
  },
  typography: {},
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 0,
        },
      },
    },
  },
});
