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

export const getStaticProps = async ({ query: { id } }: any) => {
  try {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
    return { props: { post: JSON.parse(JSON.stringify(data)) } };
  } catch (error) {
    console.error(error);
  }
};

// SinglePostPage.getInitialProps = async ({ query: { id } }) => {
//   const res = await fetch(`/api/posts/${id}`);
//   const { data } = await res.json();
//   return { post: data };
// };
export default SinglePostPage;
