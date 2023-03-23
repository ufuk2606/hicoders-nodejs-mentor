import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PostsContext } from "../contexts/PostsContext";

function Posts() {
  const { postList, getPostById  } = useContext(PostsContext);

  const postTamplate = postList.map((post) => {
    const date = new Date(post.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    return (

      <div className="card col-5 mx-5 my-3">
        <h5 className="card-header">Posted on {formattedDate} </h5>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <Link to={`/posts/${post.id}`} onClick={()=>getPostById(post.id)} className="btn btn-primary">
            See the Post
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
        <div className="row">{postList.length === 0 ? <h3 className="text-center text-white">No Post Found</h3> : postTamplate}</div>
    </div>
  );
}

export default Posts;

