import { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/db";
import User from "@models/user";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

db();

async function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        const newProfilePic = null;
        // eslint-disable-next-line no-unused-vars
        const { password, ...info } = user._doc;

        res.status(200).json({
          success: true,
          data: {
            ...info,
            profilePic: newProfilePic ? newProfilePic : user.profilePic,
          },
        });
      } catch (error) {
        res.status(400).json({ success: false, msg: "Invalid GET request" });
      }
      break;
    case "PUT":
      try {
        if ("token" in req.cookies) {
          const secret: Secret | undefined = process.env.JWT_SECRET || "";
          const { token } = req.cookies;

          jwt.verify(
            token as string,
            secret,
            {},
            async (err: any, info: any) => {
              if (err) throw err;

              const updateUser = await User.findById(id);

              const isAuthor =
                JSON.stringify(updateUser._id) === JSON.stringify(info.id);

              if (!isAuthor) {
                return res.status(400).json("you can only update your account");
              }

              if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
              }

              await updateUser.update(req.body);

              res.status(200).json({ success: true, data: updateUser });
            }
          );
        } else {
          res
            .status(400)
            .json({ success: false, msg: "You cannot update other's account" });
        }
      } catch (error) {
        res.status(500).json({ error: "Invalid PUT request" });
      }
      break;
    case "DELETE":
      try {
        if ("token" in req.cookies) {
          const secret: Secret | undefined = process.env.JWT_SECRET || "";
          const { token } = req.cookies;

          jwt.verify(
            token as string,
            secret,
            {},
            async (err: any, info: any) => {
              if (err) throw err;

              const deleteUser = await User.findById(id);

              const isAuthor =
                JSON.stringify(deleteUser._id) === JSON.stringify(info.id);

              if (!isAuthor) {
                return res.status(400).json("you can only delete your account");
              }
              await deleteUser.delete({
                _id: id,
              });

              res.status(200).json({
                success: true,
                data: {},
                msg: "User has been deleted",
              });
            }
          );
        }
      } catch (error) {
        res.status(500).json({ error: "Invalid DELETE request" });
      }
      break;
    default:
      res.status(400).json({ error: "Error occured" });
      break;
  }
}

export default handleUser;
