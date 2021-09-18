import Post from "./Post"
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("/post")
  }, []);
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  )
}

export default Posts
