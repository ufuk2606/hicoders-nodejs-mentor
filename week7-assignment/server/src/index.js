import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// Connect to db
import "./db/sequelize.js";

// routes
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";

const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"));

// parse application/x-www-foimport rm-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/comments", commentRoute);

export default app;
