import React from "react";
import * as S from "./sign-up.style";

export function SignUp() {
  return (
    <S.Container>
      <S.SignUpWrapper>
        <h2>Sign Up</h2>
        <S.SignUpForm id="loginform" autoComplete="off">
          <S.Label>
            Username
            <S.Input type="text" name="username" />
          </S.Label>
          <S.Label>
            Email
            <S.Input type="email" name="email" />
          </S.Label>
          <S.Label>
            Password
            <S.Input type="password" name="password" />
          </S.Label>
          <S.SignUpButton>Sign Up</S.SignUpButton>
          <span>-OR-</span>
          <span>
            Get started as a <S.Anchor href="/">Demo User</S.Anchor>
          </span>
        </S.SignUpForm>
      </S.SignUpWrapper>
    </S.Container>
  );
}
