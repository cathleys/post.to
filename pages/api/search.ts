import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";
import Post from "@models/post";

const handlerSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { query },
  } = req;
  if (method === "GET") {
    await db();
    try {
      const agg = [
        {
          $search: {
            autocomplete: {
              query,
              path: "title",
              fuzzy: {
                maxEdits: 2,
                prefixLength: 1,
                maxExpansions: 256,
              },
            },
          },
        },
        {
          $limit: 5,
        },
        {
          $project: {
            imageUrl: 0,
            content: 0,
            username: 0,
            authorId: 0,
            updatedAt: 0,
            createdAt: 0,
          },
        },
      ];

      const posts = await Post.aggregate(agg);

      return res.status(200).send(posts);
    } catch (error) {
      res.status(400).send("Error getting index search on database");
    }
  }
};
export default handlerSearch;
