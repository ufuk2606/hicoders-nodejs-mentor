import Comment from "../models/commentModel.js";

const getAllComments = async () => {
  try {
    return await Comment.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getCommentById = async (pCommentId) => {
  try {
    return await Comment.findByPk(pCommentId);
  } catch (error) {
    console.log(error);
  }
};

const getCommentByPostId = async (pPostId) => {
  try {
    return await Comment.findAll({ where: { PostId: pPostId } });
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (pComment) => {
  try {
    return await Comment.create(pComment);
  } catch (error) {
    console.log(error);
  }
};

const editComment = async (pCommentId, pComment) => {
  try {
    const comment = await Comment.findByPk(pCommentId);
    comment.set({
      content: pComment.content,
      isEdited: true,
    });
    return await comment.save();
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllComments,
  getCommentById,
  createComment,
  editComment,
  getCommentByPostId,
};
