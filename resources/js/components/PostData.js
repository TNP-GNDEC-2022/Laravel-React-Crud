import React from "react";
import { Link } from "react-router-dom";

class Data extends React.Component {
    delPost = id => {
        this.props.deletePost(id);
    };

    render() {
        const { posts } = this.props;
        return (
            <div class="card text-dark bg-light mb-3 mr-5 ml-5 mt-5 ">
                <h5 class="card-header ">{posts.type}</h5>
                <div class="card-body">
                    <h5 class="card-title">{posts.title}</h5>
                    <p class="card-text">{posts.description}</p>
                    <Link to={`/edit/${posts.id}`} class="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger ml-5"
                        onClick={() => this.delPost(posts.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Data;
