import { useState } from "react";
import swal from "sweetalert2";
import { PostsContext } from "../contexts/PostsContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";

const Create = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      content: content,
      
    }; 
    if (title !== "" && content !== "") {
      addPost(newPost);
      setTitle("");
      setContent("");
      swal.fire("Good job!", "Your post is live now!")
    } else {
      swal("Please enter all of information!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-75 m-auto">
        <h2 className="text-white mt-5">Create new Post</h2>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="border border-1 p-3 bg-secondary rounded mt-5"
        >
          <div className="mb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-3">
            <textarea
              rows="4"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Enter content"
            />
          </div>
          <button
            data-testid="add-button"
            type="submit"
            className="btn btn-primary"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
