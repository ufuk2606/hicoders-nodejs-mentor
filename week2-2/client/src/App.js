import React, { useContext, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";
import { PostsContext } from "./contexts/PostsContext";
import { faker } from "@faker-js/faker";

function App() {
  const { id, setId } = useContext(PostsContext);
  const { input, setInput } = useContext(PostsContext);
  const { textarea, setTextarea } = useContext(PostsContext);
  const { submit, setSubmit } = useContext(PostsContext);
  const { update, setUpdate } = useContext(PostsContext);
  const { data, setData } = useContext(PostsContext);

  const getData = async () => {
    const response = await fetch("http://localhost:5050/posts");
    const commingData = await response.json();
    setData(commingData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickDelete = async (pId) => {
    await fetch("http://localhost:5050/posts/" + pId, {
      method: "DELETE",
    });
    await getData();
  };

  const handleClickEdit = async (pId, pTitle, pContent) => {
    setSubmit(false);
    setUpdate(true);
    setId(pId);
    setInput(pTitle);
    setTextarea(pContent);
  };

  const handleClickUpdate = async () => {
    setSubmit(true);
    setUpdate(false);
    const newPost = {
      id: id,
      title: input,
      content: textarea,
    };
    await fetch("http://localhost:5050/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    await getData();
    setInput("");
    setTextarea("");
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      id: faker.datatype.uuid(),
      title: input,
      content: textarea,
    };
    await fetch("http://localhost:5050/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    setInput("");
    setTextarea("");
    await getData();
  };

  const handleClickFake = async (e) => {
    e.preventDefault();
    const newPost = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
    };
    await fetch("http://localhost:5050/posts/fake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    await getData();
  };

  return (
    <div className="container">
      <h1>Add New Post</h1>
      <div>
        <label>
          <h6>Title:</h6>
        </label>
        <input
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div>
        <label>
          <h6>Content:</h6>
        </label>
        <textarea
          className="form-control"
          row="3"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
      </div>
      {submit ? (
        <button
          className="btn btn-primary m-1"
          onClick={(e) => handleClickSubmit(e)}
        >
          Submit
        </button>
      ) : (
        ""
      )}
      {update ? (
        <button
          className="btn btn-primary m-1"
          onClick={() => handleClickUpdate()}
        >
          update
        </button>
      ) : (
        ""
      )}{" "}
      <br />
      <button
        className="btn btn-success m-1"
        onClick={(e) => handleClickFake(e)}
      >
        generate a fake post
      </button>
      <Posts
        data={data}
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      ></Posts>
    </div>
  );
}

export default App;
