import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import { CommentContext } from "../contexts/CommentContext";
import { UserContext } from "../contexts/UserContext";

const PostCard = ({ post }) => {
  const { setSinglePost, getPostById, setPoster } = useContext(PostContext);

  const { getCommentByPostId, setComment, commentList, setCommenter } =
    useContext(CommentContext);

  const { userList } = useContext(UserContext);

  let navigate = useNavigate();

  const showSinglePost = async (pPostId) => {
    const post = await getPostById(pPostId);
    setSinglePost(post);
    const comment = await getCommentByPostId(pPostId);
    setComment(comment);
    navigate(`/post/${pPostId}`);
  };

  const findPoster = async (pPostUserId) => {
    const poster = userList.find((user) => user.id === pPostUserId);
    setPoster(poster);
  };

  const findCommenter = async (pPostId) => {
    const comment = commentList.find((comment) => comment.PostId === pPostId);
    const commenter = userList.find((user) => user.id === comment.UserId);
    setCommenter(commenter);
  };

  return (
    <div class="card m-3 col-5">
      <div class="card-header">
        posted on{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(new Date(post.createdAt))}
      </div>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            showSinglePost(post.id);
            findPoster(post.UserId);
            findCommenter(post.id);
          }}
        >
          See The Post
        </button>
      </div>
    </div>
  );
};

export default PostCard;
