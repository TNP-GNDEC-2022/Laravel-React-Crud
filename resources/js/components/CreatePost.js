import React, {Component} from 'react';
import axios from 'axios';
class CreatePost extends Component{
    state = {
        Title: "",
        Description: "",
        Category: "Announcement"
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createPost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/posts", this.state);
        // console.log(res);
        this.setState({
            Title: "",
            Description: "",
            Category: ""
        })
        if(res.data.status == 200){
            this.props.history.push("/");
        }
    }
    render(){
        return (
            <div className="mx-5">
                <form onSubmit={this.createPost}>
                    <h1>Create New Post</h1>
                    <div className="input-group my-4">
                        <span className="input-group-text">Title</span>
                        <input type="text" name="Title" className="form-control" value={this.state.Title} onChange={this.handleInput} placeholder="Enter Title" required />
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Description</span>
                        <input type="text" name="Description" className="form-control" value={this.state.Description} onChange={this.handleInput} placeholder="Enter Description" required />
                    </div>
                    <div className="my-4">
                        <label>
                            <span className="fs-6 me-3 fw-normal">Category :</span>
                            <select name="Category" value={this.state.Category} onChange={this.handleInput} className="btn btn-Primary dropdown-toggle">
                                <option className="bg-light text-dark" value="Announcement">Announcement</option>
                                <option className="bg-light text-dark" value="Placement">Placement</option>
                                <option className="bg-light text-dark" value="Selection">Selection</option>
                                <option className="bg-light text-dark" value="Training">Training</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className="input-group">
                        <input type="submit" className="btn btn-success" value="Create Post" />
                    </div>
                </form>
            </div>
            
        );
    }
}

export default CreatePost;