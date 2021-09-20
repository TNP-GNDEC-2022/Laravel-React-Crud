import React, {Component} from 'react';
import axios from 'axios';

class EditPost extends Component{
    state = {
        Title: "",
        Description: "",
        Category: ""
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updatePost = async (e) => {
        const id = this.props.match.params.id;
        e.preventDefault();
        const updateRes = await axios.post(`/post/${id}`, this.state);
        // console.log(updateRes);
        if(updateRes.data.status == 200){
            this.props.history.push("/");
        }
    }
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const found_post = await axios.get(`/post/${id}/edit`);
        console.log(found_post);
        console.log(found_post.data.post.Title);
        this.setState({
            Title: found_post.data.post.Title,
            Description: found_post.data.post.Description,
            Category: found_post.data.post.Category
        })
    }
    render(){
        return (
            <div className="mx-5">
                <form onSubmit={this.updatePost}>
                    <h1>Edit Post</h1>
                    <div className="input-group my-3">
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
                        <input type="submit" className="btn btn-success" value="Update Post" />
                    </div>
                </form>
            </div>
            
        );
    }
}

export default EditPost;