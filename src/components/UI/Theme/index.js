import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

const dark = grey[900];
const light = grey[400];
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      dark: dark,
      light: light,
    },
    primary: {
      main: dark,
      default: '#000'
    },
    secondary: {
      main: "#fff",
      transparent50: alpha(light, 0.4),
    },
    background: {
      default: dark,
    }
  },
});
