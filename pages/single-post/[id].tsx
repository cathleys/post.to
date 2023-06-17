import React from "react";
import type { GetStaticPaths, NextPage } from "next";
import fetch from "isomorphic-fetch";
import { SinglePost, PageContainer } from "@features/index";

type PostProps = {
  title: string;
  desc: string;
  content: string;
  photo: string;
  author: string;
};

interface SinglePostPageProps {
  post: PostProps;
}
const SinglePostPage: NextPage<SinglePostPageProps> = ({ post }) => {
  return (
    <PageContainer>
      <SinglePost {...post} />
    </PageContainer>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const { data } = await res.json();
  const paths = data.map((post: any) => {
    return {
      params: {
        id: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const baseUrl =
    "http://localhost:3000" || process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/posts/${params.id}`);
  const { data } = await res.json();

  return { props: { post: data } };
};

export default SinglePostPage;
