const CreatePost = () => {
  return (
    <div>
      <form>
        <legend>Create a new post</legend>
        <div className="form-group">
          <label htmlFor="title" className="form-label mt-4">Title</label>
          <input type="text" className="form-control" placeholder="Title" />
          <small className="form-text text-muted">Make sure the title is crisp and ellaborative.</small>
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label mt-4">Author</label>
          <input type="text" className="form-control" placeholder="Author" />
          <small className="form-text text-muted">Please enter your full name</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Content</label>
          <textarea className="form-control" ows="3" spellCheck="false"></textarea>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
