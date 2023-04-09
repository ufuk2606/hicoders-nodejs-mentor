import Comment from "../model/comment-model.js";

const getAllComments = async () => {
    const comments = await Comment.findAll();
    return "Get all comments";
};

export default {
    getAllComments
};
