import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Work from './Work';
import Work1 from './Work1';
import Work2 from './work2';
import Work3 from './work3';
import NewAppBar from './NewAppBar';
import { Frame3 } from './Frame3';
import { Frame4 } from './Frame4';
import { Frame5 } from './Frame5';
import { Frame6 } from './Frame6';
import Text1 from './Text1';
import Text2 from './Text2';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from '@material-ui/core';
import Text3 from './Text3';
import { makeStyles } from '@material-ui/core';
import PaperComp from './PaperComp';
import BottomBar from './BottomBar';

let theme = createMuiTheme({
  typography: {
    fontFamily: ['Apercu'].join(','),
  },
  palette: {
    primary: { 500: '#05386b' },
    secondary: { A400: '#f4f7f6' },

  }
});
theme = responsiveFontSizes(theme);

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <NewAppBar />
      <div className="new">
        <Text1 />
        <Work />
      </div>
      <div data-aos="fade-up" className="first-container">
        <Work1 />
        <Text2 />
      </div>
      <div data-aos="fade-left" className="second-container">
        <Text3 />
        <Work2 />
      </div>
      <div data-aos="fade-up-right" className="third-container">
        <Work3 />
        <PaperComp />
      </div>

      <div data-aos="fade-up" className="fourth-container">
        <Frame3 /><Frame4 /> <Frame5 /> <Frame6 />
      </div>
      <div>
        <BottomBar />
      </div>
    </MuiThemeProvider>
  );
}
export default App;
