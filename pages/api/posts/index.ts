/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import Post from "@models/post";
import User from "@models/user";
import db from "@utils/db";
import NextCors from "nextjs-cors";
import jwt, { Secret } from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    await db();

    try {
      const posts = await Post.find().sort({ createdAt: -1 });

      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(400).json({ error: "Invalid GET request." });
    }
  } else if (req.method === "POST") {
    await db();
    if ("token" in req.cookies) {
      const secret: Secret | undefined = process.env.JWT_SECRET || "";
      const { token } = req.cookies;

      jwt.verify(token as string, secret, {}, async (err: any, info: any) => {
        if (err) throw err;

        const user = await User.findById(info.id);

        const newPost = await Post.create({
          ...req.body,
          username: user.username,
          user: info.username,
          authorId: info.id,
        });

        res.status(201).json({
          success: true,
          data: newPost,
        });
      });
    }
  } else {
    res.status(400).json({ error: "All fields are required." });
  }
};
