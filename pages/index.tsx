import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Routes } from "@config/routes";
import * as I from "@features/index";
import * as A from "@features/ui/posts/post-article";
import * as P from "@features/ui/posts/post.style";
import Link from "next/link";
import { getPosts } from "./api/posts";

const Home = ({ posts }: any) => {
  const [articlesToShow, setArticlesToShow] = useState(7);

  const { data, isLoading, isError } = useQuery(
    "posts",
    async () => {
      return axios("https://post-to.vercel.app/api/posts") as any;
    },
    {
      initialData: { data: { posts: posts } },
    }
  );

  if (isLoading) {
    return <I.Loader />;
  }
  if (isError) {
    return <h2>Something went wrong, refresh browser.</h2>;
  }
  const renderedArticles = data?.data?.data
    ?.slice(0, articlesToShow)
    .map((post: A.ArticleProps) => {
      return <A.PostArticle key={post._id} {...post} />;
    });
  const loadMore = () => {
    setArticlesToShow(articlesToShow + 10);
  };
  return (
    <I.PageContainer>
      <I.HeroSection />
      <P.ArticleContainer>
        <P.HeaderandButton>
          <h3>Read articles</h3>
          <Link href={Routes.seePosts}>
            <I.ButtonUi text="View all" color={I.ButtonColor.white} />
          </Link>
        </P.HeaderandButton>

        {renderedArticles}
        {data?.data?.data?.length > articlesToShow && (
          <I.ButtonUi
            onClick={loadMore}
            text="Load More"
            color={I.ButtonColor.white}
          />
        )}
      </P.ArticleContainer>
    </I.PageContainer>
  );
};

export const getStaticProps = async () => {
  const data = await getPosts();

  return { props: { posts: data } };
};
export default Home;
