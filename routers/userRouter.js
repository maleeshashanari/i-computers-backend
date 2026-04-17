import express from "express";
import { changeUserPassword, createUser, getUser, googleLogin, loginUser, sendOTP, updateUserprofile, verifyOTP } from "../controllers/userController.js";

const userRouter = express.Router();

// localhost:3000/users
//Usually for registering/creating a new user
userRouter.post("/", createUser);

//localhost:3000/users/login
//Typically, for a user to log in
userRouter.post("/login", loginUser);
userRouter.get("/profile", getUser);
userRouter.post("/update-password", changeUserPassword);

userRouter.post("/send-otp",sendOTP);
userRouter.post("/verify-otp", verifyOTP)
userRouter.post("/google-login", googleLogin)
userRouter.put("/", updateUserprofile)
userRouter.get("/profile", getUser)

export default userRouter;
