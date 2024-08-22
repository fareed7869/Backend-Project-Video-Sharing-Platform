import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //limiting json data to handle server crash //its form data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // for url data ( + % )
app.use(express.static("public")); // files like pdf images that yu want to store in server , public is folder name
app.use(cookieParser()); // from our server access users browser cookies, secure way to handle cookies

//routes import
import userRouter from "./routes/userRoutes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
