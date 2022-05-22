import { darkTheme } from "./dark-theme";
import { lightTheme } from "./light-theme";


const globalTheme = (mode) => {
  if(mode === 'light') {
    return lightTheme;
  }
  else
    return darkTheme;
};


export default globalTheme;
