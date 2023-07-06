import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  try {
    const findUser = await User.findOne({ username });

    const passOk = bcrypt.compareSync(password, findUser.password);
    if (!passOk) {
      res.status(400).json({ success: false, msg: "Wrong credentials" });
    }

    const secret: string | undefined = process.env.JWT_SECRET || "";
    jwt.sign({ username, id: findUser._id }, secret, {}, (err, token) => {
      if (err) throw err;

      // Set JWT token as cookie
      const cookie = `token=${token}; path=/`;
      res.setHeader("Set-Cookie", cookie);
      res.status(200).json({
        success: true,
        user: {
          id: findUser._id,
          username,
        },
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Invalid Request" });
  }
};

export default login;
