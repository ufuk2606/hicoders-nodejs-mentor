import { createContext, useState, useEffect } from "react";

export const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState([]);
  const [commenter, setCommenter] = useState();

  const getCommentsList = async () => {
    const response = await fetch("http://localhost:8000/api/v1/comments");
    const data = await response.json();
    setCommentList(data);
  };

  useEffect(() => {
    getCommentsList();
  }, []);

  const getCommentByPostId = async (pId) => {
    const response = await fetch(
      `http://localhost:8000/api/v1/comments?PostId=${pId}`
    );
    const data = await response.json();
    setComment(data);
  };

  return (
    <CommentContext.Provider
      value={{
        getCommentByPostId,
        setComment,
        comment,
        commenter,
        setCommenter,
        commentList,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
