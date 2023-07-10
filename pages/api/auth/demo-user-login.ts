import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const demoUserlogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  try {
    const demoUser = await User.findOne({ username: "demo user" });

    const passOk = bcrypt.compareSync(password, demoUser.password);
    if (!passOk) {
      res.status(400).json({ success: false, msg: "Wrong credentials" });
    }

    const secret: string | undefined = process.env.JWT_SECRET || "";
    jwt.sign({ username, id: demoUser._id }, secret, {}, (err, token) => {
      if (err) throw err;

      // Set JWT token as cookie
      const cookie = `token=${token}; path=/`;
      res.setHeader("Set-Cookie", cookie);
      res.status(200).json({
        success: true,
        user: {
          id: demoUser._id,
          username,
        },
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Invalid Request" });
  }
};

export default demoUserlogin;
