import Head from "next/head";
import React from "react";
import { NavigationMenu } from "@features/index";

type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Head>
        <title>Cath.to</title>
        <meta property="og:title" content="Cath.to" key="title" />
      </Head>

      <NavigationMenu />

      <main>{children}</main>
    </>
  );
}
