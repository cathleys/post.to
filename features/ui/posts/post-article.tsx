import { Routes } from "@config/routes";
import Image from "next/image";
import * as A from "./post-article.style";
import Link from "next/link";

type ArticleProps = {
  _id: string;
  title: string;
  photo: string;
  desc: string;
};
export function PostArticle({ _id, title, photo, desc }: ArticleProps) {
  return (
    <Link
      href={{
        pathname: Routes.singlePost,
        query: { id: _id },
      }}
      passHref
    >
      <A.Container>
        <A.Wrapper>
          <A.Date>Date</A.Date>
          <A.TitleandSentence>
            <A.Title>{title}</A.Title>
            <A.Sentence>{desc}</A.Sentence>
          </A.TitleandSentence>
        </A.Wrapper>

        <Image
          src={photo}
          alt="post image"
          width={210}
          height={170}
          style={{ borderRadius: "0.5rem" }}
          priority={false}
          layout="responsive"
          loading="lazy"
        />
      </A.Container>
    </Link>
  );
}
