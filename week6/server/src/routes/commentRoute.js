import express from "express";

import {
  createComment,
  getCommentById,
  getAllComments,
  editComment,
  getCommentByPostId,
} from "../repositories/commentRepository.js";

const router = express.Router();

// This route enables us to get all the comments or get a single comment according to the PostId
router.get("/", async (req, res) => {
  const { PostId } = req.query;
  if (PostId) {
    const numberTypedPostId = Number(PostId);
    return res.json(await getCommentByPostId(numberTypedPostId));
  }
  return res.json(await getAllComments());
});

router.get("/:id", async (req, res) => {
  res.json(await getCommentById(req.params.id));
});

router.post("/", async (req, res) => {
  await createComment(req.body);
  res.send("Comment created successfully!");
});

router.put("/:id", async (req, res) => {
  await editComment(req.params.id, req.body);
  res.send(req.body);
});

export default router;
