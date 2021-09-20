import React, {Component} from 'react';
import axios from "axios";
import Post from "./Post"

class Posts extends Component{
    state = {
        posts: [],
        loadingChecker: true
    }
    fetchPosts = async () => {
        const res = await axios.get("/posts");
        // console.log(res);
        if(res.data.status == 200){
            this.setState({
                posts: res.data.posts,
                loadingChecker: false
            })
        }
    }
    componentDidMount = () => {
        this.fetchPosts();
    }
    postDeleter = async (id) => {
        const deleteRes = await axios.delete(`/post/${id}`);
        console.log(deleteRes);
        if(deleteRes.data.status == 200){
            this.fetchPosts();
        }
    }
    render(){
        if(this.state.loadingChecker){
            return (<h1>Posts are loading</h1>);
        }
        return (
            <div>
                <h1 className="mx-5">All Posts</h1>
                { this.state.posts.map(post => (
                    <Post post = {post} key = {post.id} deletePost = {this.postDeleter} />
                )) }
            </div>
            
        );
    }
}

export default Posts;