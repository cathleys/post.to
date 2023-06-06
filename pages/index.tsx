import { PageContainer, HeroSection } from "@features/index";
import { ArticleList, ButtonUi } from "@features/ui";
import {
  ArticleContainer,
  HeaderandButton,
} from "@features/ui/article/article.style";
import { ButtonColor } from "@features/ui/button/button";

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <ArticleContainer>
        <HeaderandButton>
          <h3>Read articles</h3>
          <ButtonUi text="View all" href={""} color={ButtonColor.white} />
        </HeaderandButton>
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </ArticleContainer>
    </PageContainer>
  );
};

export default Home;
