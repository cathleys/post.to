import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import * as S from "./sign-up.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HtmlTooltip from "@mui/material/Tooltip";
import { UserContext } from "@features/ui";
export function SignUp() {
  const router = useRouter();
  const { setUserInfo } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "demo user",
    password: "demouser",
  });

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast.success("Account successfully created");
      setTimeout(() => {
        router.push(Routes.login);
      }, 2500);
    } catch (error) {
      console.log(error);
      toast.error("Error Signing Up");
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const demoUserLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:3000/api/auth/demo-user-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        await res.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      }

      router.push(Routes.home);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.SignUpWrapper>
        <h2>Sign Up</h2>
        <S.SignUpForm id="loginform" onSubmit={signUp}>
          <S.Label>
            Username
            <S.Input
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
          </S.Label>
          <S.Label>
            Password
            <S.Input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </S.Label>
          <S.SignUpButton>Sign Up</S.SignUpButton>
          <span>-OR-</span>
          <HtmlTooltip
            title={<h1>Interviewer?</h1>}
            placement="top-start"
            arrow
          >
            <span>
              <strong>Get started as a</strong>{" "}
              <S.Anchor onClick={demoUserLogin}>Demo User</S.Anchor>
            </span>
          </HtmlTooltip>
        </S.SignUpForm>
      </S.SignUpWrapper>
      <ToastContainer autoClose={2000} />
    </S.Container>
  );
}
