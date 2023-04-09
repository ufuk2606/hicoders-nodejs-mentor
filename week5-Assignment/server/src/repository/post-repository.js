import Post from "../model/post-model.js";

const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};
const createPost = async (pPost) => {
  const newPost = await Post.create(pPost);
  return newPost;
};
const getPostById = async (postId) => {
  const post = await Post.findOne({ where: { id: postId } });
  return post;
};
const getPostByUserid = async (userId) => {
  const post = await Post.findAll({ where: { userId: userId } });
  return post;
};
const deletePost = async (postId) => {
  const post = await Post.destroy({ where: { id: postId } });
  return post;
};
const updatePost = async (pPost, pId) => {
  try {
    return await Post.update(pPost, { where: { id: pId } });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
  getPostByUserid
};
