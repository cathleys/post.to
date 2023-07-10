import { NextApiRequest, NextApiResponse } from "next";
import Comment from "@models/comment";
import User from "@models/user";
import db from "@utils/db";
import jwt, { Secret } from "jsonwebtoken";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await db();
    if ("token" in req.cookies) {
      const secret: Secret | undefined = process.env.JWT_SECRET || "";
      const { token } = req.cookies;

      jwt.verify(token as string, secret, {}, async (err: any, info: any) => {
        if (err) throw err;

        const user = await User.findById(info.id);

        const newComment = await Comment.create({
          ...req.body,
          username: user.username,
          authorId: info.id,
        });

        res.status(201).json({
          success: true,
          data: newComment,
        });
      });
    }
  } else {
    res.status(400).json({ error: "All fields are required." });
  }
}
export default handler;
