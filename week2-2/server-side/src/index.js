import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRouter from './controller/post-router.js';
import userRouter from './controller/user-router.js';

const app = express();
const port = 5050;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postRouter)
app.use("/users", userRouter)


app.listen(port, () => {
  console.log('App is running!!!');
});