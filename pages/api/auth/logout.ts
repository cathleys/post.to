import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await db();
    res.setHeader(
      "Set-Cookie",
      "token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );

    res.json("You have logged out");
    res.end();
  } else {
    console.error("Error logging out");
  }
};
export default logout;
