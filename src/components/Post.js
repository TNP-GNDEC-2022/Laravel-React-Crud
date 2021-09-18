import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">Author</div>
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Content - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt volutpat mi id ornare. Nullam rutrum ligula quis ultrices tincidunt. Etiam volutpat sapien a tellus egestas, fringilla egestas sem luctus. Phasellus posuere odio dolor, sed elementum velit viverra et. Ut nec mauris ut lectus suscipit tempus facilisis ac felis. Etiam tempor rhoncus diam et bibendum. Nam ut suscipit elit. Cras finibus dui vel nunc varius, nec consequat metus elementum. Mauris condimentum convallis est semper pretium. Nam nec imperdiet velit. Duis euismod urna metus, eu consectetur mi convallis sit amet. Morbi ultrices mauris et magna aliquam, ac sollicitudin purus facilisis.</p>
      <Link to="/edit" type="button" class="btn btn-warning">Edit</Link>
      <button type="button" class="btn btn-danger mx-3">Delete</button>
      </div>
    </div>
  )
}

export default Post
