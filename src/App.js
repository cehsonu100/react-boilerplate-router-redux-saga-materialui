
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Fab } from '@mui/material';
import React from 'react';
import globalTheme from './themes/global-themes';
import routes  from './utils/routes';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

/** 
 * Just return the routes and add material ui themeprovider 
 * If wanted to perform some action on page load like login,
 * then do here using useEffect and not forgot this to remove this comment =D  
 */
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedThemeMode: 'light'
    }
  }

  toggleThemeMode = () => {
    const newThemeMode = this.state.selectedThemeMode === 'light' ? 'dark' : 'light';
    this.setState({selectedThemeMode: newThemeMode});
  }

  fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
    innerWidth: 100
  };

  render() {
    const { selectedThemeMode } = this.state;
    return (
      <ThemeProvider theme={globalTheme(this.state.selectedThemeMode)}>
        <CssBaseline />
        <Fab variant="extended" sx={this.fabStyle} color="primary" aria-label="add" onClick={this.toggleThemeMode}>
          {selectedThemeMode} 
          {selectedThemeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Fab>
        {routes}
      </ThemeProvider>
    );
  }

 
}

export default App;