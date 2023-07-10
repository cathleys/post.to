import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Routes } from "@config/routes";
import * as I from "@features/index";
import * as A from "@features/ui/posts/post-article";
import * as P from "@features/ui/posts/post.style";
import Link from "next/link";

const Home = () => {
  const [articlesToShow, setArticlesToShow] = useState(7);

  const articles = useQuery("posts", async () => {
    return axios("https://post-to.vercel.app/api/posts");
  });
  const homeBlogPosts = articles?.data?.data?.data || {};

  if (articles.isLoading) {
    return <I.Loader />;
  }
  if (articles.isError) {
    return <h2>Something went wrong, refresh browser.</h2>;
  }
  const renderedArticles = homeBlogPosts
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
        {homeBlogPosts.length > articlesToShow && (
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

export default Home;
