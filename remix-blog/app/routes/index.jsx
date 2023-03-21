import { Link } from "@remix-run/react";

export default function Landing() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Link to="/home">Enter</Link>
    </div>
  );
}
