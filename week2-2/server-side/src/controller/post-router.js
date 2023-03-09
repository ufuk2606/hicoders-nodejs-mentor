import express from "express";
import {
  getPostList,
  getPostById,
  deletePost,
  updatePost,
  addPost,
} from "../repositories/postsRepository.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getPostList());
});

router.get("/:id", (req, res) => {
  res.json(getPostById(req.params.id));
});  

router.delete("/:id", (req, res) => {
  res.json(deletePost(req.params.id));
});

router.put("/:id", (req, res) => {
  res.json(updatePost(req.params.id , req.body)); 
}); 

router.post("/", (req, res) => {
  res.json(addPost(req.body)); 
}); 

router.post("/fake", (req, res) => {
  res.json(addPost(req.body)); 
});

export default router;
