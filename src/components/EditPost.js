import { useEffect, useState } from "react";
import axios from "axios";

const EditPost = ({ history, match }) => {
  const id = match.params.postId;
  console.log(id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.patch(`/post/${id}`, { title, author, content })
    if (res.status === 200) {
      history.push("/");
    }
  };

  const editPost = async () => {
    const { data } = await axios.get(`/post/${id}/edit`);
    console.log(data);
    setTitle(data.post.title);
    setAuthor(data.post.author);
    setContent(data.post.content);
    console.log(title);
  }

  useEffect(() => {
    editPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend>Edit</legend>
        <div className="form-group">
          <label htmlFor="title" className="form-label mt-4">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Title" />
          <small className="form-text text-muted">Make sure the title is crisp and ellaborative.</small>
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label mt-4">Author</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className="form-control" placeholder="Author" />
          <small className="form-text text-muted">Please enter your full name</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" ows="3" spellCheck="false"></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="mt-3 btn btn-dark"
            value="Edit"
          />
        </div>
      </form>
    </div>
  )
}

export default EditPost
