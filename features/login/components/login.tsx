import React from "react";
import * as L from "./login.style";

export function Login() {
  return (
    <L.Container>
      <L.LoginWrapper>
        <h2>Login</h2>
        <L.LoginForm>
          <L.Label>
            Email
            <L.Input type="email" name="email" />
          </L.Label>
          <L.Label>
            Password
            <L.Input type="password" name="password" />
          </L.Label>
          <span>-OR-</span>
          <L.Anchor>Create an Account</L.Anchor>
          <span>
            Get Access Directly: <L.Anchor>Demo User</L.Anchor>
          </span>
        </L.LoginForm>
      </L.LoginWrapper>
    </L.Container>
  );
}
