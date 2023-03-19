import { Link } from "@remix-run/react";

export default function Post() {
  return (
    <main>
      <h2>This is a Post</h2>
      {/* <Link to={`/posts/${postId}}`}>read more...</Link> */}
      <Link to="/">read more...</Link>
    </main>
  );
}
