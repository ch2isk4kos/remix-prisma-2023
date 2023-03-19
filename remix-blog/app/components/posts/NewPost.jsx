// import { Link } from "@remix-run/react";

export default function NewPost() {
  return (
    <form method="post" className="NewPost">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea type="text" id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Add Post</button>
      </div>
    </form>
  );
}
