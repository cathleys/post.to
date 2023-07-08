import React, { useState } from "react";
import { InferGetStaticPropsType } from "next";
import * as I from "@features/index";
import * as P from "@features/ui/posts/post-article";
import { ArticleContainer } from "@features/ui/posts/post.style";

const ListOfPostsPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [articlesToShow, setArticlesToShow] = useState(7);

  const renderedArticles = posts?.data
    ?.slice(0, articlesToShow)
    .map((post: P.ArticleProps) => {
      return <P.PostArticle key={post._id} {...post} />;
    });
  const loadMore = () => {
    setArticlesToShow(articlesToShow + 10);
  };
  return (
    <I.PageContainer>
      <ArticleContainer>
        {renderedArticles}
        {posts?.data?.length > articlesToShow && (
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

export default ListOfPostsPage;
