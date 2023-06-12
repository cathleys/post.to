import Link from "next/link";
import * as A from "./post-article.style";
import Image from "next/image";
import { Routes } from "@config/routes";

type ArticleProps = {
  _id: string;
  title: string;
  photo: string;
  desc: string;
};
export function PostArticle({ _id, title, photo, desc }: ArticleProps) {
  return (
    <A.Container>
      <Link
        href={{
          pathname: Routes.singlePost,
          query: { id: _id },
        }}
      >
        <A.Wrapper>
          <A.Date>Date</A.Date>
          <A.TitleandSentence>
            <A.Title>{title}</A.Title>
            <A.Sentence>{desc}</A.Sentence>
          </A.TitleandSentence>
        </A.Wrapper>
      </Link>
      <Image
        src={photo}
        alt={title}
        width={210}
        height={170}
        style={{ borderRadius: "0.5rem" }}
        priority={false}
      />
    </A.Container>
  );
}
