import { cyan, pink, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: cyan[100],
    },
  },
});

