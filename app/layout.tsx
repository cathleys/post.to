"use client";
import "@fontsource-variable/inter";
import React from "react";
import GlobalStyle from "@styles/global-style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
