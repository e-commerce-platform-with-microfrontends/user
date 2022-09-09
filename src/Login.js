import React, { useState } from 'react';
import { FormControl, Button, ButtonAction, ButtonSize } from 'ui-components';

import { API_ROOT } from './env';

import * as S from './Login.styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = ({ target: { value } }) => {
    setUsername(value);
  }

  const changePassword = ({ target: { value } }) => {
    setPassword(value);
  }

  const login = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };

    try {
      const response = await fetch(`${API_ROOT.DEV}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });      
      if(!response.ok) {
        throw new Error('Something went wrong')
      }
      alert('Logged in successfully');
    } catch (e) {
      alert('something went wrong')
    }
  }

  return (
    <S.FormContainer>
      <S.FormGroup>
        <FormControl label="Username" onChange={changeUsername}>
        </FormControl>
      </S.FormGroup>
      <S.FormGroup>
        <FormControl label="Password" onChange={changePassword}>
        </FormControl>
      </S.FormGroup>
      <S.SignUp>Don't have an account, Please Signup</S.SignUp>
      <Button
        id="login"
        buttonType={ButtonAction.PRIMARY}
        size={ButtonSize.DEFAULT}
        disabled={!username || !password}
        onClick={login}>
        Login
      </Button>
    </S.FormContainer>
  )
};
