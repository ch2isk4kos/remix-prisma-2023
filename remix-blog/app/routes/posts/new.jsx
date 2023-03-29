import { Form, Link, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const content = form.get("content");
  const fields = { title, content };
  // VALIDATION
  const fieldErrors = {
    title: validateTitle(title),
    content: validateContent(content),
  };
  const post = await db.post.create({ data: fields });
  return redirect(`/posts/${post.id}`);
};

export default function NewPost() {
  const actionData = useActionData(); // return data from an action
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
