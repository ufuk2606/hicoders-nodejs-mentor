import React, { useContext } from "react";
import Navbar from "./Navbar";
import { PostContext } from "../contexts/PostContext";
import PostCard from "./PostCard";

const Posts = () => {
  const { postList } = useContext(PostContext);

  if (postList.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2 className="mt-5 text-white">no post found...</h2>
        </div>
      </>
    );
  }

  const postsTemplate = postList.map((post, index) => {
    return <PostCard key={index} post={post} />;
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <select class="form-select">
            <option selected>Filter by</option>
          </select>
        </div>
        <div className="row">{postsTemplate}</div>
      </div>
    </div>
  );
};

export default Posts;
