import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";

import Comment from "@models/comment";

import jwt, { Secret } from "jsonwebtoken";

db();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const comments = await Comment.find({ blogId: id })
          .populate("authorId", ["profilePic", "username", "bio"])
          .sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: comments });
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid GET request" });
      }
      break;

    case "DELETE":
      try {
        if ("token" in req.cookies) {
          const secret: Secret | undefined = process.env.JWT_SECRET || "";
          const { token } = req.cookies;

          jwt.verify(
            token as string,
            secret,
            {},
            async (err: any, info: any) => {
              if (err) throw err;
              const getUserComment = await Comment.findById(id).populate(
                "authorId"
              );

              const isAuthor =
                JSON.stringify(getUserComment.authorId) ===
                JSON.stringify(info.id);
              if (!isAuthor) {
                return res.status(400).json("you can only delete your comment");
              }

              await Comment.findByIdAndDelete(id);
            }
          );
          res.status(200).json({
            success: true,
            data: {},
            msg: "Comment deleted successfully",
          });
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: "Invalid DELETE request" });
      }
      break;
    default:
      res.status(500).json({ success: false, error: "Something went wrong" });
      break;
  }
}

export default handler;
