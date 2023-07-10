import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ButtonUi, Loader, UserContext } from "@features/ui";
import { Comment } from "./comment";
import * as C from "./comments.style";
import { useQuery } from "react-query";
import axios from "axios";

type CommentListProps = {
  commentText: string;
  // eslint-disable-next-line no-unused-vars
  setCommentText: (e: any) => void;
};

export function CommentList({ commentText, setCommentText }: CommentListProps) {
  const router = useRouter();
  const { id } = router.query;
  const { userInfo } = useContext(UserContext);

  const getComments = useQuery("comments", async () => {
    const { data } = await axios.get(
      `https://post-to.vercel.app/api/comment/${id}`
    );

    return data;
  });

  if (getComments?.isLoading) return <Loader />;

  if (getComments?.error) {
    return <h2>Error occured. Refresh browser.</h2>;
  }
  const comments = getComments?.data?.data || {};
  const createComment = async (e: any) => {
    e.preventDefault();

    const body = {
      blogId: id,
      authorId: userInfo?.id,
      text: commentText,
    };

    try {
      const res = await fetch(`https://post-to.vercel.app/api/comment`, {
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
          <C.TextAreaComment
            value={commentText}
            placeholder="leave a comment..."
            onChange={setCommentText}
          />
          <ButtonUi text="Comment" onClick={createComment} />
        </C.Comment>
      </C.Section>
      <C.ArrayComments>
        {comments?.length > 0 ? (
          comments?.map((comment: any) => (
            <Comment key={comment._id} {...comment} />
          ))
        ) : (
          <h4>No comments found. Be the first one to leave a comment.</h4>
        )}
      </C.ArrayComments>
    </>
  );
}
