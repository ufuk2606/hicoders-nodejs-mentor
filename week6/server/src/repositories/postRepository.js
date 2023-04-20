import Post from "../models/postModel.js";

const getAllPosts = async () => {
  try {
    return await Post.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (pPostId) => {
  try {
    return await Post.findByPk(pPostId);
  } catch (error) {
    console.log(error);
  }
};

const getPostByUserId = async (pUserId) => {
  try {
    return await Post.findAll({ where: { UserId: pUserId } });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (pPost) => {
  try {
    return await Post.create(pPost);
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (pPostId, pPost) => {
  try {
    const post = await Post.findByPk(pPostId);
    post.set({
      title: pPost.title,
      content: pPost.content,
      UserId: pPost.UserId,
    });
    return await post.save();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (pPostId) => {
  try {
    await Post.destroy({
      where: {
        id: pPostId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
  getPostByUserId,
};
