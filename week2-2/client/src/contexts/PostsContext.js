import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [id, setId] = useState();
  const [input, setInput] = useState();
  const [textarea, setTextarea] = useState();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [submit, setSubmit] = useState(true);

  return (
    <PostsContext.Provider
      value={{
        id,
        setId,
        input,
        setInput,
        textarea,
        setTextarea,
        data,
        setData,
        update,
        setUpdate,
        submit,
        setSubmit,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
