// 'express'  (web framework)  import කරi.
import express from "express";
// 'mongoose'  (library) එක import කරi. මේකෙන් Node.js, application එක MongoDB දත්ත ගබඩාවට සම්බන්ධ කරi.
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import authorizeUser from "./lib/jwtMiddleware.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// MongoDB Atlas හි දත්ත ගබඩාවට සම්බන්ධ වීමට අවශ්‍ය සම්පූර්ණ URI ලිපිනය නියත විචල්‍යයක් (constant) ලෙස ගබඩා කරයි.
const mongoURI = process.env.mongoURI;

// Mongoose yoda gena database 1ta sambanda we.
mongoose
  .connect(mongoURI)
  // සම්බන්ධතාවය සාර්ථක නම් (Promise resolve වුවහොත්), මෙම කොටස ක්‍රියාත්මක වී පණිවිඩය Console එකේ පෙන්වයි.
  .then(() => {
    console.log("Connected to MongoDB");
  })
  // සම්බන්ධ වීමේදී යම් දෝෂයක් ඇති වුවහොත් (Promise reject වුවහොත්), මෙම කොටස ක්‍රියාත්මක වී දෝෂ පණිවිඩය පෙන්වයි.
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });

const app = express();

app.user(cors());

app.use(express.json());

app.use(authorizeUser);

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

// සර්වර් එක සාර්ථකව ආරම්භ වූ පසු ක්‍රියාත්මක වන callback function එක.
function start() {
  console.log("Server started on port 3000");
}

// සර්වර් එක 3000 දරණ port එකෙන් listen (සවන්) දීමට ආරම්භ කරයි.
// සවන් දීම ආරම්භ වූ පසු 'start' function එක ක්‍රියාත්මක කරයි.
app.listen(3000, start);
