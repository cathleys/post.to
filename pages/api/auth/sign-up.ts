import db from "@utils/db";
import { hash, genSalt } from "bcryptjs";
import User from "@models/user";
import { NextApiRequest, NextApiResponse } from "next";

db();
async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body: { username, password },
  } = req;

  switch (method) {
    case "POST":
      try {
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        const newUser = await User.create({
          username,
          password: hashedPassword,
        });

        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(500).json({ error: "Invalid POST request" });
      }
      break;
    default:
      res.status(405).json({ message: "Something went wrong" });
  }
}

export default signUp;
