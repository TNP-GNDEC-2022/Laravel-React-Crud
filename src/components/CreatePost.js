import { useState } from "react";
import axios from "axios";

const CreatePost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://laravel-crud-practice.herokuapp.com/post", { title, author, content });
    setTitle("");
    setAuthor("");
    setContent("");
    if (res.status === 200) {
      history.push("/")
    }
    console.log(res);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend>Create a new post</legend>
        <div className="form-group">
          <label htmlFor="title" className="form-label mt-4">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
          <small className="form-text text-muted">Make sure the title is crisp and ellaborative.</small>
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label mt-4">Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" placeholder="Author" />
          <small className="form-text text-muted">Please enter your full name</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" ows="3" spellCheck="false" />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="mt-3 btn btn-dark"
            value="Create"
          />
        </div>
      </form>
    </div>
  )
}

export default CreatePost
