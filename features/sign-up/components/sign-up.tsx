import React, { useState } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import * as S from "./sign-up.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast("Account successfully created");
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
  return (
    <S.Container>
      <S.SignUpWrapper>
        <h2>Sign Up</h2>
        <S.SignUpForm id="loginform" onSubmit={handleSubmit}>
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
          <span>
            Get started as a <S.Anchor href="">Demo User</S.Anchor>
          </span>
        </S.SignUpForm>
      </S.SignUpWrapper>
      <ToastContainer autoClose={2000} />
    </S.Container>
  );
}
