import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@features/ui/article/article-card";
import articleImage from "../public/icons/article-thumbnail.svg";
import * as A from "@features/ui/article/article.style";

const meta: Meta<typeof ArticleCard> = {
  title: "UI/Article",
  component: ArticleCard,
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

const Article = () => {
  return (
    <A.Container>
      <A.Wrapper>
        <A.Date>Aug. 14, 1997</A.Date>
        <A.Title>
          10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
        </A.Title>
        <A.Sentence>
          Redefined the user acquisition and redesigned the onboarding
          experience, all within 3 working weeks.
        </A.Sentence>
      </A.Wrapper>

      <A.ImagePost src={articleImage} alt="image" width={210} height={170} />
    </A.Container>
  );
};

export const ArticlePost: Story = {
  render: () => (
    <div style={{ padding: "10px" }}>
      <Article />
    </div>
  ),
};
