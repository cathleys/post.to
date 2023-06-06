import React from "react";
import * as L from "./login.style";
import { Routes } from "@config/routes";

export function Login() {
  return (
    <L.Container>
      <L.LoginWrapper>
        <h2>Login</h2>
        <L.LoginForm id="loginform" autoComplete="off">
          <L.Label>
            Email
            <L.Input type="email" name="email" />
          </L.Label>
          <L.Label>
            Password
            <L.Input type="password" name="password" />
          </L.Label>
          <L.LoginButton>Login</L.LoginButton>
          <span>-OR-</span>
          <L.Anchor href={Routes.signup}>Create an Account</L.Anchor>
          <span>
            Get Access Directly: <L.Anchor>Demo User</L.Anchor>
          </span>
        </L.LoginForm>
      </L.LoginWrapper>
    </L.Container>
  );
}
