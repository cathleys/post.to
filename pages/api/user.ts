import clientPromise from "@lib/connect-db";
import User from "@models/user";

clientPromise;

async function UserRoute(req: any, res: any) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.find(id);

        if (!user) {
          return res.status(404).json({ success: false });
        }

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        return res.status(404).json({ success: false });
      }
      break;
  }
}

export default UserRoute;
