import { Link } from "@remix-run/react";
import { useLoaderData } from "react-router";
import styles from "../../styles/posts/index.css";

export const loader = () => {
  const data = {
    posts: [
      { id: "1", title: "Post 1", body: "First ever post." },
      { id: "2", title: "Post 2", body: "This is the second post." },
      { id: "3", title: "Post 3", body: "And the third." },
    ],
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
        {posts.map((post) => (
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
