import connectDB from "@utils/connect-db";
import Post from "@models/post";

connectDB();

async function PostsbyId(req: any, res: any) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id);

        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: JSON.stringify(post) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidator: true,
        });
        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: JSON.stringify(post) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedPost = await Post.deleteOne({ _id: id });
        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
export default PostsbyId;
