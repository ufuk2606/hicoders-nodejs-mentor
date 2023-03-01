import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import personRouter from "../expressRouter.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//ENDPOINTS
app.use('/', personRouter)

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`rest-api running on port ${PORT}`);
});
