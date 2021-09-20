import React from "react";
import Axios from "axios";
import PostData from "./PostData";

class Posts extends React.Component {
    state = {
        posts: [],
        loading: true
    };
    fetchPosts = async () => {
        const res = await Axios.get("/addPost");
        if (res.data.status === 200) {
            this.setState({ posts: res.data.posts });
            this.setState({ loading: false });
        }
    };
    componentDidMount() {
        this.fetchPosts();
    }

    deletePost = async id => {
        const res = await Axios.delete(`/addPost/${id}`);
        if (res.data.status === 200) {
            this.fetchPosts();
        }
    };

    render() {
        if (this.state.loading) {
            return <h1 className="text-center mt-3">Loading....</h1>;
        }
        if (window.location.href === window.origin + "/") {
            return (
                <div>
                    {this.state.posts.map(posts => (
                        <PostData
                            posts={posts}
                            key={posts.id}
                            deletePost={this.deletePost}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default Posts;
