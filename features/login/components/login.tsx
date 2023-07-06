import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import HtmlTooltip from "@mui/material/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import * as L from "./login.style";
import { UserContext } from "@features/ui";

export function Login() {
  const router = useRouter();
  const { setUserInfo } = useContext(UserContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const login = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        toast.error("Invalid username or password, Please try again.");
        return;
      }
      await res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
      router.push(Routes.home);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <L.Container>
      <L.LoginWrapper>
        <h2>Login</h2>
        <L.LoginForm id="loginform" onSubmit={login}>
          <L.Label>
            Username
            <L.Input type="text" name="username" onChange={handleChange} />
          </L.Label>
          <L.Label>
            Password
            <L.Input type="password" name="password" onChange={handleChange} />
          </L.Label>
          <L.LoginButton>Login</L.LoginButton>
          <span>-OR-</span>
          <HtmlTooltip
            title={<h1>Interviewer?</h1>}
            placement="top-start"
            arrow
          >
            <span>
              Get Access Directly: <L.Anchor>as a Demo User</L.Anchor>
            </span>
          </HtmlTooltip>
          <L.Anchor href={Routes.signup}>Create an Account</L.Anchor>
        </L.LoginForm>
      </L.LoginWrapper>
      <ToastContainer position="top-center" />
    </L.Container>
  );
}
