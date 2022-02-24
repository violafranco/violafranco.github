import React, {useState} from 'react';
import Themes from './theme/theme';
import styled, { ThemeProvider } from 'styled-components';
import Switch from './switch/Switch';
import { GlobalStyle } from './theme/theme';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return ( 
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />

        <Header theme={theme} setTheme={setTheme}>

        </Header>

        <Main>
          
        </Main>

      </ThemeProvider>
    </>
  );
}


export default App;
