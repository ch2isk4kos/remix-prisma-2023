import { Outlet } from "@remix-run/react";
import styles from "../styles/posts.css";

export default function Posts() {
  return (
    <main className="Posts">
      <Outlet />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
