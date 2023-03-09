import React from "react";

function Posts({ data, handleClickDelete, handleClickEdit }) {
  return (
    <div className="container">
      {data?.map((post) => (
        <div key={post?.id} className="card m-3 ">
          <div className="card-header">{post?.title}</div>
          <div className="card-body">
            <p className="card-text">{post?.content}</p>
            <button
              className="btn btn-danger rounded m-3"
              onClick={() => handleClickDelete(post?.id)}
            >
              Delete
            </button>{" "}
            <button
              className="btn btn-warning rounded"
              onClick={() =>
                handleClickEdit(post?.id, post?.title, post?.content)
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
