import React from "react";
import { format } from "timeago.js";
import * as C from "./comments.style";
export type CommentType = {
  _id: string;
  text: string;
  src: string;
  authorId: { username: string };
  createdAt: Date;
};
export function Comment({ text, src, authorId, createdAt }: CommentType) {
  return (
    <C.ContainerComment>
      <C.ImageUserText>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <C.Avatar src={src} alt="profile" />

        <C.UserAndText>
          <C.User>{authorId?.username}</C.User>
          <span>{text}</span>
        </C.UserAndText>
      </C.ImageUserText>
      <C.Time>{format(createdAt)}</C.Time>
    </C.ContainerComment>
  );
}
