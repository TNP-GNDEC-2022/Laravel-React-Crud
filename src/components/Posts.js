import Post from "./Post"
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("https://laravel-crud-practice.herokuapp.com/post");
    if (res.status === 200) {
      const postData = res.data.posts.reverse();
      setPosts(postData);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const res = await axios.delete(`https://laravel-crud-practice.herokuapp.com/post/${id}`);
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
