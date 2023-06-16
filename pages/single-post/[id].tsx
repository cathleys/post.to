import React from "react";
import type { NextPage } from "next";

import { SinglePost, PageContainer } from "@features/index";

const SinglePostPage: NextPage = ({ post }: any) => {
  return (
    <PageContainer>
      <SinglePost {...post} />
    </PageContainer>
  );
};

SinglePostPage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://cathto.vercel.app/api/posts/${id}`);
  const { data } = await res.json();
  return { post: data };
};
export default SinglePostPage;
