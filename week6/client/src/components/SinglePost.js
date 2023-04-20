import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import Navbar from "./Navbar";
import { CommentContext } from "../contexts/CommentContext";

const SinglePost = () => {
  const { singlePost } = useContext(PostContext);
  const { comment } = useContext(CommentContext);

  const commentTemplate = comment?.map((item) => {
    return (
      <>
        <div
          className="w-100 rounded-3 bg-white text-black p-3 my-2"
          key={item?.id}
        >
          <p className="fw-semibold">{item?.content}</p>
          on{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(item?.createdAt))}
        </div>
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="container text-white">
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 fw-bold">{singlePost?.title}</h1>
          <p>
            published on{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(singlePost?.createdAt))}
          </p>
        </div>
        <div className="content">
          <p>{singlePost?.content}</p>
          <h2>Comments</h2>
          {comment?.length === 0 ? <p>No comments yet.</p> : commentTemplate}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
