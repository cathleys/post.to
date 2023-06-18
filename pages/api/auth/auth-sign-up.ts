import User from "@models/user";
import connectDB from "@utils/connect-db";
import { hash, genSalt } from "bcryptjs";

connectDB();

async function AuthSignUp(req: any, res: any) {
  const {
    method,
    body: { username, email, password },
  } = req;

  switch (method) {
    case "POST":
      try {
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });

        const createUser = await newUser.save();
        res.status(201).json(createUser);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    default:
      res.status(405).json({ message: "Something went wrong" });
  }
}

export default AuthSignUp;
