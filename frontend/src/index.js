import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {AppRoutes} from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import {createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette:{
    primary: {
      light:'#ffe167',
      main:'#fbd743',
      dark:'#e4c33e'
    },
    secundary: {
      light: '#82c5f8',
      main:'#5db9ff',
      dark: '#1f94ed'
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes/>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
