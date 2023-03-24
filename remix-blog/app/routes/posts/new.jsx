import { Form, Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
  // console.log("request:", request);

  const form = await request.formData();
  console.log("form:", form);

  const title = form.get("title");
  const content = form.get("content");

  const fields = { title, content };
  console.log("fields:", fields);

  // @TODO: submit to database

  return redirect("/posts");
};

export default function NewPost() {
  return (
    <>
      {/* HEADER */}
      <div>
        <h2>Create a Post</h2>
        <Link to="/posts">Go Back</Link>
      </div>
      {/* FORM */}
      <div>
        <Form method="post">
          {/* title */}
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </div>
          {/* content */}
          <div>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" required />
          </div>
          {/* submit button */}
          <div>
            <button type="submit">Add Post</button>
          </div>
        </Form>
      </div>
    </>
  );
}
