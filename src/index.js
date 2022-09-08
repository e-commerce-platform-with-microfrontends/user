import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';

import Login from './Login';

window.createMfeContainerInLayout('user-root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div className='container'>
      <Login />
    </div>
  </ThemeProvider>,
  document.querySelector('#user-root')
);
