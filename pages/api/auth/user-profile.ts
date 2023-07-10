import type { NextRequest } from "next/server";
import jwt, { Secret } from "jsonwebtoken";
import db from "@utils/db";

const userProfile = async (req: NextRequest, res: any) => {
  await db();
  const secret: Secret | undefined = process.env.JWT_SECRET || "";
  if ("token" in req.cookies) {
    const { token } = req.cookies;

    jwt.verify(token as string, secret, {}, (err: any, info: any) => {
      if (err) throw err;
      res.json(info);
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

export default userProfile;
