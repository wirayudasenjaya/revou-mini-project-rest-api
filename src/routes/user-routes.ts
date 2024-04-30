import express from "express";

import { UserController } from "../controllers/user-controller";

export const userRoutes = (userController: UserController) => {
  const userRouter = express.Router();
  userRouter.post("/users/register", userController.register);
  userRouter.post("/users/login", userController.login);

  return userRouter;
};
