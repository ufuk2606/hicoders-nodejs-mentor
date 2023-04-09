import express from "express";
import postRepository from "../repository/post-repository.js";

const router = express.Router();

// Get all posts
router.get("/", async (req, res, next) => {
  try {
    let posts = await postRepository.getAllPosts();
    return res.status(200).send(posts);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

//Get all posts of a user
router.get("/?userId", async (req, res, next) => {
  const userId = req.query.userId
  try {
    let posts = await postRepository.getPostByUserid(userId);
    return res.status(200).send(posts);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new post
router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newPost = await postRepository.createPost(body);
    return res.send(newPost);
  } catch (error) {
    return next({ status: 500, message: error });
  }
});

// Get a single post by id
router.get("/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const selectedPost = await postRepository.getPostById(postId);
    if (selectedPost === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      });
    return res.status(200).send(selectedPost);
  } catch (err) {
    return next({ status: 500, message: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res, next) => {
  const postId = req.params.id;
  try {
    const selectedPost = await postRepository.deletePost(postId);
    if (selectedPost === 0){
      res.status(404).json({ message: `Record with id ${postId} not found` });
    }else {
      res.send( `Deleted with id ${postId} `);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message:  `Record with id ${postId} not found` });
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const post = req.body;
  const updatedPost = {
    id: post.id,
    title: post.title,
    content: post.content,
  };
  const editedPost = await postRepository.updatePost(updatedPost, postId);
  res.status(201).send(editedPost);
});


export default router;
