import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { PostContext } from "../contexts/PostContext";
import PostCard from "./PostCard";

const Posts = () => {
  const { postList } = useContext(PostContext);
  const [selectedOption, setSelectedOption] = useState("");

  const sortedNewest = postList.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  const newContent = sortedNewest.map((post, index) => {
    return <PostCard key={index} post={post} />;
  });

  const sortedOldest = postList.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  const oldContent = sortedOldest.map((post, index) => {
    return <PostCard key={index} post={post} />;
  });

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

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <select
            className="form-select"
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="row">
          {selectedOption === "newest" ? newContent : oldContent}
        </div>
      </div>
    </div>
  );
};

export default Posts;
