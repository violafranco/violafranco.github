import React, {useState} from 'react';
import Themes from './theme/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/theme';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return ( 
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />

        <Header theme={theme} setTheme={setTheme}></Header>

        <AboutMe></AboutMe>

        <Skills></Skills>

      </ThemeProvider>
    </>
  );
}

export default App;
