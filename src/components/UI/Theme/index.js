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

      colorPrimary: "#4db5ff",
      colorPrimaryVariant: "rgba(77, 181, 255, 0.4)",
      colorWhite: "#ffffff",
      colorLight: "rgba(255, 255, 255, 0.6)",
      colorBG: "#1f1f38",
      colorBGVariant: "#2c2c6c",

      // background
      bg1: "#e0e0e0",
      bg2: "#bdbdbd",

      // text
      textColor1: "#bdbdbd",
      textColor2: "#eeeeee",

      // space
      pagePaddingTop: "3rem",
      pagePaddingBottom: "3rem",

      //section title
      sectionTitle: {
        "&.MuiTypography-root": {
          color: "#4db5ff",
          textAlign: "center",
        },
      },

      // pageMinHight: "calc(100vh - 64px)",
      pageMinHight: "100vh",

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
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
  },
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
          borderRadius: 5,
          height: "2.25rem",
          // boxShadow: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          // boxShadow: 0,
          textTransform: "none",
          // height: "2.25rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
  },
});
