import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@lib/connect-db";
import { ObjectId } from "mongodb";
import Post from "@models/post";

export const getPost = async (id: string | ObjectId) => {
  const mongoClient = await clientPromise;

  const data = await mongoClient
    .db()
    .collection("posts")
    .findOne({ _id: new ObjectId(id as string) });
  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const id = req.query.id!;
        const post = await getPost(id as string);

        if (!post) {
          res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ data: post });
      } catch (error) {
        res.status(400).json({ error: "Error getting post" });
      }
      break;

    case "PUT":
      try {
        await clientPromise;
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidator: true,
        });
        if (!post) {
          return res.status(400).json({ error: "Post not found" });
        }

        res.status(200).json({ data: post });
      } catch (error) {
        res.status(400).json("Error updating post");
      }
      break;

    case "DELETE":
      try {
        await clientPromise;
        const deletedPost = await Post.deleteOne({ _id: id });

        if (!deletedPost) {
          return res.status(400).json({ error: "Post not found" });
        }

        res.status(200).json({ data: deletedPost });
      } catch (error) {
        res.status(400).json({ error: "Error deleting post" });
      }
      break;

    default:
      res.status(400).json({ error: "Something went wrong" });
      break;
  }
};

export default handler;
