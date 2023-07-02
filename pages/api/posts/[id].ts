import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";
import Post from "@models/post";

db();

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id);

        if (!post) {
          return res.status(400).json({ success: false, msg: "No post found" });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid GET request" });
      }
      break;
    case "PUT":
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        if (!post) {
          return res
            .status(400)
            .json({ success: false, msg: "Can't update the post" });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid PUT request" });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await Post.findByIdAndDelete({ _id: id });

        if (!deletedPost) {
          return res
            .status(400)
            .json({ success: false, msg: "Can't delete the post" });
        }

        res
          .status(200)
          .json({ success: true, data: {}, msg: "Deleted successfully" });
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

export default handlePost;
