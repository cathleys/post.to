import * as I from "@features/index";

const Home = () => {
  return (
    <I.PageContainer>
      <I.HeroSection />
      <I.ArticleContainer>
        <I.HeaderandButton>
          <h3>Read articles</h3>
          <I.ButtonUi text="View all" href={""} color={I.ButtonColor.white} />
        </I.HeaderandButton>

        <I.PostArticle />
        <I.PostArticle />
        <I.PostArticle />
      </I.ArticleContainer>
    </I.PageContainer>
  );
};

export default Home;
