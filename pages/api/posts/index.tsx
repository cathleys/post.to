import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@lib/connect-db";
import Post from "@models/post";
import NextCors from "nextjs-cors";

export const getPosts = async (): Promise<typeof Post> => {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db().collection("posts").find().toArray();
  return JSON.parse(JSON.stringify(data));
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;

  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    optionsSuccessStatus: 200,
  });
  switch (method) {
    case "GET":
      try {
        const data = await getPosts();

        res.status(200).json({ posts: data });
      } catch (error) {
        console.log(error);
        res.status(400).json("Post Not Found");
      }
      break;
    case "POST":
      try {
        await clientPromise;
        const data = Post.create(req.body);
        console.log("POST: req body", req.body);

        res.revalidate("/posts");
        res.revalidate(`/posts/${id}`);
        res.status(200).json({ post: data });
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Check necessary details to add Post" });
      }
      break;
    default:
      res.status(400).json({ error: "Something went wrong" });
  }
};

export default handler;

// async function Posts(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const posts = await Post.find({});

//         res.status(200).json({ posts: JSON.parse(JSON.stringify(posts)) });
//       } catch (error) {
//         res.status(400).json({ success: false, message: "ERRROR" });
//       }
//       break;

//     case "POST":
//   try {
//      const post = await Post.create(req.body);

//      res.status(200).json({ success: true, data: post });
//       } catch (error) {
//    res.status(400).json({ success: false });
//    }
//     break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

// export default Posts;
