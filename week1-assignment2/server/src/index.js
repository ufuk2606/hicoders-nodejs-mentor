import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./userRouter.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", userRouter);

const port = 8080;

app.listen(port, () => {
  console.log(`rest-api running on port ${port}`);
});
