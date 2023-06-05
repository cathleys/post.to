import React from "react";
import type { NextPage } from "next";
import { PageContainer } from "@features/ui";
import { Login } from "@features/index";

const LoginPage: NextPage = () => {
  return (
    <PageContainer>
      <Login />
    </PageContainer>
  );
};
export default LoginPage;
