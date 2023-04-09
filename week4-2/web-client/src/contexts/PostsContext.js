import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
  const [postList, setPostList] = useState([]);
  const [postById, setPostById] = useState([]);

  const getPostList = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/posts`);
      const data = await response.json();
      setPostList(data);
      console.log("data",data)
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = async (pId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/posts/${pId}`);
      const commingData = await response.json();
      setPostById(commingData);
      console.log("datawithid",commingData)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostList();
  }, []);

  const addPost = async (pPost) => {
    const newPerson = {
      id: pPost.id,
      title: pPost.title,
      content: pPost.content,
    
    };

    await fetch("http://localhost:5001/api/v1/posts", {
      method: "POST",
      body: JSON.stringify(newPerson),
      headers: { "Content-Type": "application/json" },
    });

    getPostList();
  };

  return <PostsContext.Provider value={{ postList, getPostList, addPost, postById, getPostById }}>{props.children}</PostsContext.Provider>;
};

export default PostsContextProvider;
