import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from 'react-select';
import axios from "axios";

const EditPost = ({ history, match }) => {
  const id = match.params.postId;
  // console.log(id);

  const options = [
    { value: 'announcement', label: 'Announcement' },
    { value: 'selection', label: 'Selection' },
    { value: 'training', label: 'Traning' }
  ]

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.patch(`https://laravel-crud-practice.herokuapp.com/post/${id}`, { title, type, content })
    if (res.status === 200) {
      history.push("/");
    }
  };

  const editPost = async () => {
    const { data } = await axios.get(`https://laravel-crud-practice.herokuapp.com/post/${id}/edit`);
    // console.log(data);
    setTitle(data.post.title);
    setType(data.post.type);
    setContent(data.post.content);
    // console.log(title);
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
        <div className="form-group z-10">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
              removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed", "table"]
            }}
            onChange={(e, editor) => { setContent(editor.getData()) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">Type</label>
          <Select value={options.filter(option => option.value === type)} onChange={(option) => setType(option.value)} options={options} />
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
