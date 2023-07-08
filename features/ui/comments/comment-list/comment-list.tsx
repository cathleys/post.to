import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ButtonUi, Loader, UserContext } from "@features/ui";
import { Comment } from "./comment";
import * as C from "./comments.style";
import { useQuery } from "react-query";
import axios from "axios";

type CommentListProps = {
  commentText: string;
  iconSrc: string | undefined;
  // eslint-disable-next-line no-unused-vars
  setCommentText: (e: any) => void;
};

export function CommentList({
  commentText,
  iconSrc,
  setCommentText,
}: CommentListProps) {
  const router = useRouter();
  const { id } = router.query;
  const { userInfo } = useContext(UserContext);

  const { isLoading, error, data } = useQuery("comments", async () => {
    const { data } = await axios.get(`http://localhost:3000/api/comment/${id}`);

    return data;
  });

  if (isLoading) return <Loader />;

  if (error) {
    return <h2>Error occured. Refresh browser.</h2>;
  }

  const createComment = async (e: any) => {
    e.preventDefault();

    const body = {
      blogId: id,
      authorId: userInfo?.id,
      text: commentText,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/comment`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Error in creating comment");
      await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <C.Section>
        <h1>Top Comments</h1>
        <C.Comment>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} alt="profile pic" />
          <C.TextAreaComment
            value={commentText}
            placeholder="leave a comment..."
            onChange={setCommentText}
          />
          <ButtonUi text="Comment" onClick={createComment} />
        </C.Comment>
      </C.Section>
      <C.ArrayComments>
        {data?.data?.length > 0 ? (
          data?.data?.map((comment: any) => (
            <Comment key={comment._id} {...comment} />
          ))
        ) : (
          <h4>No comments found. Be the first one to leave a comment.</h4>
        )}
      </C.ArrayComments>
    </>
  );
}
