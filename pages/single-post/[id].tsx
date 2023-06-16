import React from "react";
import type { NextPage } from "next";
import fetch from "isomorphic-fetch";
import { SinglePost, PageContainer } from "@features/index";

const SinglePostPage: NextPage = ({ post }: any) => {
  return (
    <PageContainer>
      <SinglePost {...post} />
    </PageContainer>
  );
};
export const getServerSideProps = async ({ query: { id } }: any) => {
  const res = await fetch(`/api/posts/${id}`);
  const { data } = await res.json();
  return { post: data };
};

export default SinglePostPage;
