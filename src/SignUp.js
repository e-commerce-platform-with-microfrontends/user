import React, { useState } from 'react';

import { FormControl, Button, ButtonAction, ButtonSize } from 'ui-components';

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

  const login = () => {
    console.log(username, password);
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
