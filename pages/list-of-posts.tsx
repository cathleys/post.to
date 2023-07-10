import React, { useState } from "react";
import * as I from "@features/index";
import * as A from "@features/ui/posts/post-article";
import { ArticleContainer } from "@features/ui/posts/post.style";
import axios from "axios";
import { useQuery } from "react-query";

const ListOfPostsPage = () => {
  const [articlesToShow, setArticlesToShow] = useState(7);

  const articles = useQuery("list of posts", async () => {
    return axios("https://post-to.vercel.app/api/posts");
  });
  const blogPosts = articles?.data?.data?.data || {};

  if (articles.isLoading) {
    return <I.Loader />;
  }
  if (articles.isError) {
    return <h2>Something went wrong, refresh browser.</h2>;
  }
  const renderedArticles = blogPosts
    ?.slice(0, articlesToShow)
    .map((post: A.ArticleProps) => {
      return <A.PostArticle key={post._id} {...post} />;
    });
  const loadMore = () => {
    setArticlesToShow(articlesToShow + 10);
  };
  return (
    <I.PageContainer>
      <ArticleContainer>
        {renderedArticles}
        {blogPosts?.length > articlesToShow && (
          <I.ButtonUi
            onClick={loadMore}
            text="Load More"
            color={I.ButtonColor.white}
          />
        )}
      </ArticleContainer>
    </I.PageContainer>
  );
};

export default ListOfPostsPage;
