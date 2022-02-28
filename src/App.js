import React, {useState} from 'react';
import Themes from './theme/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/theme';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return ( 
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />

        <Header theme={theme} setTheme={setTheme}></Header>

        <AboutMe></AboutMe>

        <Skills></Skills>

        <MyProjects></MyProjects>

        <ContactMe></ContactMe>

        <Footer></Footer>

      </ThemeProvider>
    </>
  );
}

export default App;
