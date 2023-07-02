import React from "react";
import * as I from "@features/index";
import * as A from "@features/ui/posts/post-article";
import * as P from "@features/ui/posts/post.style";

const Home = ({ posts }: any) => {
  return (
    <I.PageContainer>
      <I.HeroSection />
      <P.ArticleContainer>
        <P.HeaderandButton>
          <h3>Read articles</h3>
          <I.ButtonUi text="View all" color={I.ButtonColor.white} />
        </P.HeaderandButton>

        {posts?.data?.map((post: A.ArticleProps) => {
          return <A.PostArticle key={post._id} {...post} />;
        })}
      </P.ArticleContainer>
    </I.PageContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "*",
    },
  });
  const data = await res.json();
  return { props: { posts: data } };
};
export default Home;
