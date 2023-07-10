import React from "react";
import { format } from "timeago.js";
import * as C from "./comments.style";
export type CommentType = {
  _id: string;
  text: string;
  authorId: { username: string; profilePic: string };
  createdAt: Date;
};
export function Comment({ text, authorId, createdAt }: CommentType) {
  return (
    <C.ContainerComment>
      <C.ImageUserText>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <C.Avatar src={authorId?.profilePic} alt="profile" />

        <C.UserAndText>
          <C.User>{authorId?.username}</C.User>
          <span>{text}</span>
        </C.UserAndText>
      </C.ImageUserText>
      <C.Time>{format(createdAt)}</C.Time>
    </C.ContainerComment>
  );
}
