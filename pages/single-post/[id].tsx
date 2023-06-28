import React from "react";
import type { NextPage } from "next";
import { SinglePost, PageContainer } from "@features/index";

const SinglePostPage: NextPage = () => {
  return (
    <PageContainer>
      <SinglePost title={""} desc={""} content={""} photo={""} author={""} />
    </PageContainer>
  );
};

export default SinglePostPage;
