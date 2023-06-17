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
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiUrl}/api/posts/${id}`);
  const { data } = await res.json();
  return { post: data };
};
export default SinglePostPage;
