import React, { useEffect, FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { Routes } from "@config/routes";
import * as L from "./login.style";

export function Login() {
  const { status } = useSession();

  console.log(status);
  useEffect(() => {
    if (status === "authenticated") Router.replace(Routes.home);
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <L.Container>
      <L.LoginWrapper>
        <h2>Login</h2>
        <L.LoginForm id="loginform" onSubmit={handleSubmit}>
          <L.Label>
            Email
            <L.Input type="email" name="email" required />
          </L.Label>
          <L.Label>
            Password
            <L.Input type="password" name="password" required />
          </L.Label>

          <L.ButtonWrapper>
            <L.LoginButton type="submit">Login</L.LoginButton>

            <L.LoginButton onClick={() => signIn("github")}>
              Login with Github
            </L.LoginButton>
            <L.LoginButton onClick={() => signIn("google")}>
              Login with Google
            </L.LoginButton>
          </L.ButtonWrapper>

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
