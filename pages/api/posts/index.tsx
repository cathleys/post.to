import connectDB from "@utils/connect-db";
import Post from "@models/post";

connectDB();

async function Posts(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: JSON.stringify(posts) });
      } catch (error) {
        res.status(400).json({ success: false, message: "ERRROR" });
      }
      break;

    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(200).json({ success: true, data: JSON.stringify(post) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default Posts;
