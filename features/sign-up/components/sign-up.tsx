import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import React, { useEffect, useState } from "react";
import * as S from "./sign-up.style";

export function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      createUser();
    } else {
      setIsSubmitting(isSubmitting);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const createUser = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/auth-sign-up", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      alert("User has been sucessfully created");
      router.push(`${Routes.login}?success= Account has been created`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setErrors(errors);
    setIsSubmitting(!isSubmitting);
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
            Email
            <S.Input
              type="email"
              name="email"
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
          <S.SignUpButton type="submit">Sign Up</S.SignUpButton>
          <span>-OR-</span>
          <span>
            Get started as a <S.Anchor href="/">Demo User</S.Anchor>
          </span>
        </S.SignUpForm>
      </S.SignUpWrapper>
    </S.Container>
  );
}
