const posts = [
  {
    id: 1,
    title: "how i became popular",
    content:
      "Hello everyone! My name is Peter Parker and today I want to share with you my journey on how I became popular. It all started when I was bitten by a radioactive spider and gained superpowers. I soon discovered that with great power, comes great responsibility and decided to use my abilities to help others.",
  },
  {
    id: 2,
    title: "A Day in the Life of John Doe",
    content:
      "Hi everyone, my name is John Doe and today I want to give you a glimpse into my typical day. I start my day early, usually around 6am, with a cup of coffee and some quiet time to plan out my tasks for the day. Then I head to the gym for a quick workout to get my energy levels up. After the gym, I head to work where I work as a software engineer. I spend my day coding, debugging, and testing new software. I love my job because I get to solve complex problems and create new things every day. In the evening, I usually relax by reading a good book or watching a movie. I also enjoy cooking, and I love to experiment with new recipes. I try to make time for my friends and family, and I enjoy spending time with them.Whether it's playing a game, having dinner, or just chatting, I always have a great time with them. And that's a typical day for me. I hope you enjoyed learning a bit about me. Thank you for reading!",
  },
  {
    id: 3,
    title: "John Doe's Passion Project",
    content:
      "John Doe spends his free time creating unique wood sculptures. He's driven by his passion for art and enjoys the challenge of transforming pieces of wood into beautiful works of art",
  },
];

const getPostList = () => {
  return posts; 
};

const getPostById = (pId) => {
  const post = posts.filter((post) => post.id == pId);
  return post;
};

const deletePost = (pId) => {
  const index = posts.findIndex((post) => post.id == pId);
  posts.splice(index,1)
  return "deleted"; 
};  

const updatePost = (pId, pNewPost) => {
  const index = posts.findIndex((post) => post.id == pId);
  posts[index] = pNewPost
  return "updated";  
}; 

const addPost = (pNewpost)=> {
  posts.push(pNewpost)
  return "post added"
} 

export { getPostList, getPostById, deletePost, updatePost, addPost };
 