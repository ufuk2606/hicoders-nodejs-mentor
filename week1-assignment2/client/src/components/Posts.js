import React, { useEffect, useState } from "react";

function Posts() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const commingData = await response.json();
    setData(commingData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="ms-1">Posts</h1>
      {data.map((post) => (
        <div key={post.id} className="card m-3">
          <div className="card-header">{post.createdAt}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
