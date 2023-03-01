import express from "express";
import * as userRouterMethods from "./userRouterMethods.js";

const userRouter = express.Router();

userRouter.get("/posts", userRouterMethods.getAllPosts);
userRouter.get("/users", userRouterMethods.getAllUsers);
userRouter.get("/users/:id", userRouterMethods.getWithId);

export default userRouter;
