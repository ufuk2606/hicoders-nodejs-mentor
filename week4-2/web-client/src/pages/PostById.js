import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { PostsContext } from "../contexts/PostsContext";

function PostById() {
  const { postById } = useContext(PostsContext);
  const date = new Date(postById.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  
  return (
    <div>
      <Navbar />
      <div className="text-center text-white ">
        <img className="imageContent" alt="" src="https://hicoders.ch/wp-content/uploads/2022/03/66-Talent.png" />
        <div>{postById.title} <p>published on {formattedDate}</p></div>
        <div className=""><p>{postById.content}</p></div>
      </div>
    </div>
  );
}

export default PostById;
