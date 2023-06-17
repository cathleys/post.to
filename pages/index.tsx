import fetch from "isomorphic-fetch";

import * as I from "@features/index";

const Home = ({ posts }: any) => {
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

export const getStaticProps = async () => {
  const baseUrl =
    "http://localhost:3000" || process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log("baseUrl", baseUrl);
  const res = await fetch(`${baseUrl}/api/posts`);

  const { data } = await res.json();
  return { props: { posts: data } };
};

export default Home;
