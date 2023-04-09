import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import "./common/sequelize.js"

import postsRoute from "./routes/postsRoute.js"
const app = express();

const port =5001;
//! middleware
app.use(cors());
//! parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//! parse application/json
app.use(bodyParser.json());

app.use("/api/v1/posts", postsRoute )

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})