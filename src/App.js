import React, {useState} from 'react';
import './App.css';
import Themes from './theme/theme';
import styled, { ThemeProvider } from 'styled-components';
import Switch from './switch/Switch';
import { GlobalStyle } from './theme/theme';

const App = () => {

  const [theme, setTheme] = useState('dark');

  return ( 
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />

        <Switch theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}


export default App;
