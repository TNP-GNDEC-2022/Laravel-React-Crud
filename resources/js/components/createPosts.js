import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class createPosts extends React.Component {
    state = {
        title: "",
        type: "",
        description: ""
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    savePost = async e => {
        e.preventDefault();

        const res = await axios.post("/addPost", this.state);

        if (res.data.status === 200) {
            this.props.history.push("/");
        }
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.savePost} className="ml-5 mt-5 mr-5">
                    <legend>Create a new post</legend>
                    <div className="form-group mt-4">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control "
                            value={this.state.title}
                            onChange={this.handleInput}
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="form-group z-10">
                        <label>Description:</label>
                        <textarea
                            type="text"
                            name="description"
                            className="form-control "
                            value={this.state.description}
                            onChange={this.handleInput}
                            placeholder="Description"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <select
                            name="type"
                            className="form-control "
                            value={this.state.type}
                            onChange={this.handleInput}
                            required
                        >
                            <option value="Training">Training</option>
                            <option value="Announcement">Announcement</option>
                            <option value="Selection">Selection</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary p-2">
                            Add Post
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default createPosts;
