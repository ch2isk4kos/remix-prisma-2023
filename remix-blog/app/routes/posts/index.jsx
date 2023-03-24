import { Link } from "@remix-run/react";
import { useLoaderData } from "react-router";
import { db } from "~/utils/db.server.ts";
import styles from "../../styles/posts/index.css";

export const loader = async () => {
  const data = {
    // posts: [
    //   { id: "1", title: "Post 1", content: "First ever post." },
    //   { id: "2", title: "Post 2", content: "This is the second post." },
    //   { id: "3", title: "Post 3", content: "And the third." },
    // ],
    posts: await db.post.findMany(),
    // select: { id: true, title: true, content: true },
  };
  return data;
};

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <div className="Posts">
      <div className="page-header">
        <h2>Posts</h2>
        <Link to="/posts/new" className="new-post-btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link to={post.id}>
                <h3>{post.title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
