import Post from "../components/posts/PostThumnail";
import NewPost from "../components/posts/NewPost";
import styles from "../styles/posts.css";

export default function Posts() {
  return (
    <main className="Posts">
      <h1>These are Posts</h1>
      <Post />
      <h2>Create A Post</h2>
      <NewPost />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
