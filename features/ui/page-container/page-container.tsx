import Head from "next/head";
import React from "react";
import { Footer } from "../footer";
import { NavigationMenu } from "../navigation-menu";

type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Head>
        <title>Post.to</title>
        <meta property="og:title" content="Post.to" key="title" />
      </Head>
      <NavigationMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
