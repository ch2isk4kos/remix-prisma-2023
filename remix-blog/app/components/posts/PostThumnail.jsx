import { Link } from "@remix-run/react";

export default function PostThumbnail() {
  return (
    <main className="Post">
      <h2>Post</h2>
      {/* <Link to={`/posts/${postId}}`}>read more...</Link> */}
      <Link to="/">read more...</Link>
    </main>
  );
}
