/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import Post from "@models/post";
import db from "@utils/db";
import NextCors from "nextjs-cors";

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
    const post = await Post.find({});
    res.status(200).json({ success: true, data: post });
  } else if (req.method === "POST") {
    const newPost = await Post.create(req.body);
    res.status(201).json({ success: true, data: newPost });
  } else {
    res.status(400).json({ error: "name and industry are required." });
  }
};
