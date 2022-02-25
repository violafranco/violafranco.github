import React, {useState} from 'react';
import Themes from './theme/theme';
import styled, { ThemeProvider } from 'styled-components';
import Switch from './switch/Switch';
import { GlobalStyle } from './theme/theme';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return ( 
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />

        <Header theme={theme} setTheme={setTheme}>

        </Header>

        <AboutMe>
          
        </AboutMe>

      </ThemeProvider>
    </>
  );
}

export default App;
