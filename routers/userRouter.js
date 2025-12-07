import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

// localhost:3000/users
//Usually for registering/creating a new user
userRouter.post("/", createUser);

//localhost:3000/users/login
//Typically, for a user to log in
userRouter.post("/login", loginUser);

export default userRouter;
