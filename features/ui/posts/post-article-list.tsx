import type { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import { getPosts } from "@features/home";
import { PostArticle } from "./post-article";
import * as I from "@features/index";
import { getStaticProps } from "pages";

export function PostArticleList({
  posts: p,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data, isLoading, isError } = useQuery(["posts"], getPosts, {
    initialData: { data: { posts: p } },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <I.ArticleContainer>
      <I.HeaderandButton>
        <h3>Read articles</h3>
        <I.ButtonUi text="View all" href={"/"} color={I.ButtonColor.white} />
      </I.HeaderandButton>

      {data?.posts?.map((article: any) => (
        <PostArticle key={article._id} {...article} />
      ))}
    </I.ArticleContainer>
  );
}
