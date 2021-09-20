import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Post extends Component{
    delete_Post = (id) => {
        this.props.deletePost(id);
    }
    render(){
        const {post} = this.props;
        return (
                <div className="card my-4 mx-4">
                    <div className="card-body">
                        <h4 className="card-title fs-3 fw-bold">{post.Title}</h4>
                        <p className="card-text fs-5">{post.Description}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text d-inline py-1 px-3 rounded-pill border bg-light mt-2">{post.Category}</p>
                            <div>
                                <Link to={`/post/${post.id}/edit`} className="btn btn-warning">Edit</Link>
                                <button onClick={() => this.delete_Post(`${post.id}`)} className="btn btn-danger mx-2">Delete</button>
                            </div>
                        </div>
                        
                    </div>
                </div> 
        );
    }
}

export default Post;