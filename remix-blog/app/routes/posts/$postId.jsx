import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });
  if (!post) throw new Error("Post not found.");
  const data = { post };
  return data;
};

export const action = async ({ request }) => {
  //
  const form = await request.formData();
};

export default function Post() {
  const { post } = useLoaderData();
  return (
    <div className="Post">
      {/* HEADER */}
      <div className="post-header">
        <h2>{post.title}</h2>
        <Link to="/posts">back to posts</Link>
      </div>
      {/* CONTENT */}
      <div className="post-content">{post.content}</div>
      {/* FOOTER */}
      <div className="post-footer">
        <form method="post">
          <input type="hidden" name="_method" value="delete" />
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
}
