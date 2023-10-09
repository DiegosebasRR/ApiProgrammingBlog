import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import UserModel from "../models/auth";
const registerController = async (req: any, res: Response) => {
  const { firstname, lastname, email, password } = req.body;

  const newData = new UserModel({
    firstname,
    lastname,
    email,
    password,
  });

  const responseUser = await registerNewUser(newData);
  res.send(responseUser);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "Password_incorrect") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
