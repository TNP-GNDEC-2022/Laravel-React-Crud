import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react";

class EditPosts extends React.Component {
    state = {
        title: "",
        type: "",
        description: ""
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    updatePost = async e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/addPost/${id}`, this.state);
        if (res.data.status === 200) {
            this.props.history.push("/");
        }
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/addPost/${id}/edit`);
        this.setState({ title: res.data.posts.title });
        this.setState({ type: res.data.posts.type });
        this.setState({ description: res.data.posts.description });
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.updatePost} className="ml-5 mt-5 mr-5">
                    <legend>Update Post </legend>
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
                            <option value="Announcement">Announcement</option>
                            <option value="Selection">Selection</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className=" btn btn-primary p-2">
                            Update Post
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default EditPosts;
