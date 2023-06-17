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
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const { data } = await res.json();
  return { post: data };
};
export default SinglePostPage;
