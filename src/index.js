import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';

import Login from './Login';
import Register from './Register';

window.createMfeContainerInLayout('user-root');

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes >
      </div>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#user-root')
);
