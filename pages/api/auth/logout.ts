import { NextApiRequest, NextApiResponse } from "next";

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
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
