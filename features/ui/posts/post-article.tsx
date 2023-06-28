import Link from "next/link";
import * as A from "./post-article.style";
import Image from "next/image";
import { Routes } from "@config/routes";

// type ArticleProps = {
//   _id: string;
//   title: string;
//   photo: string;
//   desc: string;
// };

// { _id, title, photo, desc }: ArticleProps
export function PostArticle() {
  return (
    <A.Container>
      <Link
        href={{
          pathname: Routes.singlePost,
          query: { id: 1 },
        }}
      >
        <A.Wrapper>
          <A.Date>Date</A.Date>
          <A.TitleandSentence>
            <A.Title>Title</A.Title>
            <A.Sentence>Summary</A.Sentence>
          </A.TitleandSentence>
        </A.Wrapper>
      </Link>
      <Image
        src={"/icons/post-1.png"}
        alt="post image"
        width={210}
        height={170}
        style={{ borderRadius: "0.5rem" }}
        priority={false}
      />
    </A.Container>
  );
}
