import React from "react";
import type { GetStaticPaths, NextPage } from "next";
import { SinglePost, PageContainer } from "@features/index";
import { loadSinglePost } from "lib/load-single-post";
import { loadPosts } from "lib/load-posts";

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
  const posts = await loadPosts();

  const paths = posts.map((post: any) => {
    return {
      params: {
        id: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const post = await loadSinglePost({ params });

  // Props returned will be passed to the page component
  return { props: { post } };
};

export default SinglePostPage;
