import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useQuery } from "react-query";
import { getPosts } from "./api/posts";
import { getArticles } from "@features/home";
import * as I from "@features/index";

const Home = ({ posts: p }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, isLoading, isError } = useQuery(["posts"], getArticles, {
    initialData: { data: { posts: p } },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <I.PageContainer>
      <I.HeroSection />
      <I.ArticleContainer>
        <I.HeaderandButton>
          <h3>Read articles</h3>
          <I.ButtonUi text="View all" href={"/"} color={I.ButtonColor.white} />
        </I.HeaderandButton>

        {data?.posts?.map((article: any) => (
          <I.PostArticle key={article._id} {...article} />
        ))}
      </I.ArticleContainer>
    </I.PageContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPosts();

  return { props: { posts: data }, revalidate: 60 };
};

export default Home;
