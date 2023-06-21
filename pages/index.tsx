import { GetStaticProps } from "next";
import { getPosts } from "@features/home";
import { PageContainer, PostArticleList } from "@features/ui";
import { HeroSection } from "@features/hero";

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <PostArticleList />
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPosts();

  return { props: { posts: data }, revalidate: 60 };
};

export default Home;
