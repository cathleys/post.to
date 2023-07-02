import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import { Loader } from "@features/index";
import * as A from "./post.style";

export type ArticleProps = {
  _id: string;
  title: string;
  imageUrl: string;
  desc: string;
  createdAt: Date;
};

export function PostArticle({
  _id,
  title,
  imageUrl,
  desc,
  createdAt,
}: ArticleProps) {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      singlePost();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <Loader />;

  const singlePost = () => {
    router.push({
      pathname: Routes.singlePost,
      query: { id: _id },
    });
  };
  return (
    <A.Container>
      <A.Wrapper>
        <A.Date>{new Date(createdAt).toDateString()}</A.Date>
        <A.TitleandSentence>
          <A.Title>{title}</A.Title>
          <A.Sentence>{desc}</A.Sentence>
        </A.TitleandSentence>

        <A.ReadMore onClick={singlePost}>Read More</A.ReadMore>
      </A.Wrapper>
      <A.PostImage src={imageUrl} alt="post image" />
    </A.Container>
  );
}
