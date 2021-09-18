import Post from "./Post"
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("/post");
    if (res.status === 200) {
      setPosts(res.data.posts);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const res = await axios.delete(`/post/${id}`);
    if (res.data.status === 200) {
      fetchPosts();
    }
  }

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} deletePost={deletePost} />
      ))}
    </>
  )
}

export default Posts
