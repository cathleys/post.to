import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";
import Post from "@models/post";

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
        const post = await Post.findById(id).populate("authorId", [
          "profilePic",
          "username",
          "bio",
        ]);
        if (!post) {
          return res
            .status(400)
            .json({ success: false, msg: "Post not found" });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid GET request" });
      }
      break;
    case "PUT":
      try {
        const newImage = null;
        if ("token" in req.cookies) {
          const secret: Secret | undefined = process.env.JWT_SECRET || "";
          const { token } = req.cookies;

          jwt.verify(
            token as string,
            secret,
            {},
            async (err: any, info: any) => {
              if (err) throw err;

              const updatePost = await Post.findById(id);

              const isAuthor =
                JSON.stringify(updatePost.authorId) === JSON.stringify(info.id);
              if (!isAuthor) {
                return res.status(400).json("you can only update you post");
              }
              await updatePost.updateOne({
                ...req.body,
                imageUrl: newImage ? newImage : updatePost.imageUrl,
              });

              res.status(200).json({ success: true, data: updatePost });
            }
          );
        } else {
          res
            .status(400)
            .json({ success: false, msg: "You can only update your post" });
        }
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid PUT request" });
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
              const updatePost = await Post.findById(id);

              const isAuthor =
                JSON.stringify(updatePost.authorId) === JSON.stringify(info.id);
              if (!isAuthor) {
                return res.status(400).json("you can only delete your post");
              }
              await updatePost.delete({
                _id: id,
              });
            }
          );
          res.status(200).json({ success: true, data: {} });
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: "Invalid DELETE request" });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Something went wrong" });
      break;
  }
}

export default handler;
