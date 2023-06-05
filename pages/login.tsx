import React from "react";
import type { NextPage } from "next";
import { Login, PageContainer } from "@features/index";

const LoginPage: NextPage = () => {
  return (
    <PageContainer>
      <Login />
    </PageContainer>
  );
};
export default LoginPage;
