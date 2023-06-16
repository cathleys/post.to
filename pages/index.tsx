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
  const res = await fetch("/api/posts");
  const data = await res.json();
  return { props: { posts: JSON.parse(JSON.stringify(data)) } };
};

export default Home;
