import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import personRouter from "./routes/personRouter.js";

const app = express();

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", personRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}!!!`);
});
