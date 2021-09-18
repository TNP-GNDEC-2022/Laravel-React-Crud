import { Link } from "react-router-dom"

const Post = ({ post, deletePost }) => {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">{post.author}</div>
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.content}</p>
        <Link to={`/edit/${post.id}`} type="button" className="btn btn-warning">Edit</Link>
        <button onClick={() => deletePost(post.id)} type="button" className="btn btn-danger mx-3">Delete</button>
      </div>
    </div>
  )
}

export default Post
