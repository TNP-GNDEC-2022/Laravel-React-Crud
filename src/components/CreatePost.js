import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from 'react-select'
import axios from "axios";

const CreatePost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  console.log(type)
  console.log(content)

  const options = [
    { value: 'announcement', label: 'Announcement' },
    { value: 'selection', label: 'Selection' },
    { value: 'training', label: 'Traning' }
  ]


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, type, content)
    const res = await axios.post("https://laravel-crud-practice.herokuapp.com/post", { title, type, content });
    setTitle("");
    setType("");
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
        <div className="form-group z-10">
          <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
              removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed"]
            }}
            onChange={(e, editor) => { setContent(editor.getData()); console.log(content); }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">Type</label>
          <Select onChange={(opt) => setType(opt.value)} options={options} />
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
