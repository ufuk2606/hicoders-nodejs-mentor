import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [singlePost, setSinglePost] = useState();
  const [poster, setPoster] = useState();

  const getPostsList = async () => {
    const response = await fetch("http://localhost:8000/api/v1/posts");
    const data = await response.json();
    setPostList(data);
  };

  useEffect(() => {
    getPostsList();
  }, []);

  const getPostById = async (pId) => {
    const response = await fetch(`http://localhost:8000/api/v1/posts/${pId}`);
    const data = await response.json();
    return data;
  };

  const createPdfById = async (pId) => {
    const response = await fetch(
      `http://localhost:8000/api/v1/posts/pdf/${pId}`
    );
    const data = await response.json();
    console.log(pId);
    return data;
  };

  return (
    <PostContext.Provider
      value={{
        postList,
        setPostList,
        getPostsList,
        getPostById,
        singlePost,
        setSinglePost,
        createPdfById,
        poster,
        setPoster,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
