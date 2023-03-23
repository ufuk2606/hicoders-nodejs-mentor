import Posts from "../models/postsModel.js";

const createPost = async (pPost) => {
  try {
    return await Posts.create(pPost);
  } catch (error) {
    console.log(error);
  }
};

const findPost = async () => {
  try {
    return await Posts.findAll();
  } catch (error) {
    console.log(error);
  }
};

const findPostById = async (pId) => {
    try {
      return await Posts.findByPk(pId);
    } catch (error) {
      console.log(error);
    }
  };

export default {
  createPost,
  findPost,
  findPostById
};
