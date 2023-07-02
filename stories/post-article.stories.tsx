import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import articleImage from "../public/icons/article-thumbnail.svg";
import { PostArticle } from "@features/ui/posts/post-article";
import * as A from "@features/ui/posts/post.style";

const meta: Meta<typeof PostArticle> = {
  title: "UI/Article",
  component: PostArticle,
};

export default meta;
type Story = StoryObj<typeof PostArticle>;

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

      <Image src={articleImage} alt="image" width={210} height={170} />
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
