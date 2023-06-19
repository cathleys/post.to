import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getPosts } from "./api/posts";
import * as I from "@features/index";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <I.PageContainer>
      <I.HeroSection />
      <I.ArticleContainer>
        <I.HeaderandButton>
          <h3>Read articles</h3>
          <I.ButtonUi text="View all" href={""} color={I.ButtonColor.white} />
        </I.HeaderandButton>

        {posts?.map((article: any) => (
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
