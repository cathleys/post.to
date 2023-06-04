import * as A from "./article.style";

export function ArticleCard() {
  return (
    <A.Container>
      <A.Wrapper>
        <A.Date>Aug. 14, 1997</A.Date>
        <A.TitleandSentence>
          <A.Title>
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </A.Title>
          <A.Sentence>
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </A.Sentence>
        </A.TitleandSentence>
      </A.Wrapper>
      <A.ImagePost
        src="/icons/article-thumbnail.svg"
        alt="post image"
        width={210}
        height={170}
      />
    </A.Container>
  );
}
