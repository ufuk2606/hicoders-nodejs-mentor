import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Home Page</h1>");
});

router.get("/teacher", (req, res) => {
    res.status(200).send("<h1>Teacher List</h1>");
});

router.get("/student", (req, res) => {
  res.status(200).send("<h1>Student List</h1>");
});

router.post('/teacher', (req, res) => {
  res.status(200).send("teacher added to list");
});

router.post('/student', (req, res) => {
  res.status(200).send("student added to list");
});

export default router;