import React from "react";
import type { NextPage } from "next";
import { SinglePost, PageContainer } from "@features/index";

const SinglePostPage: NextPage = () => {
  return (
    <PageContainer>
      <SinglePost />
    </PageContainer>
  );
};
export default SinglePostPage;
