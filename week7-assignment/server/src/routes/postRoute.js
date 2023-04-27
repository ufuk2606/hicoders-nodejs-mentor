import express from "express";

import {
  createPost,
  getPostById,
  getAllPosts,
  editPost,
  deletePost,
  getPostByUserId,
} from "../repositories/postRepository.js";

import pdfRepository from "../repositories/pdfRepository.js";

const router = express.Router();

// This route enables us to get all the posts or get a single post according to the UserId
router.get("/", async (req, res) => {
  const { UserId } = req.query;
  if (UserId) {
    const numberTypedUserId = Number(UserId);
    return res.json(await getPostByUserId(numberTypedUserId));
  }
  return res.json(await getAllPosts());
});

router.get("/:id", async (req, res) => {
  res.json(await getPostById(req.params.id));
});

router.get("/pdf/:id", async (req, res) => {
  await pdfRepository.printPDF(req.params.id);
  res.json(await getPostById(req.params.id));
});

router.post("/", async (req, res) => {
  await createPost(req.body);
  res.send("Post created successfully!");
});

router.put("/:id", async (req, res) => {
  await editPost(req.params.id, req.body);
  res.send(req.body);
});

router.delete("/:id", async (req, res) => {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.id === Number(req.params.id));
  if (!post) {
    return res.status(404).json({
      status: 404,
      message: `Post with id ${req.params.id} does not exist!`,
    });
  }
  await deletePost(req.params.id);
  res.send(`Post with the id ${req.params.id} deleted!`);
});

export default router;
