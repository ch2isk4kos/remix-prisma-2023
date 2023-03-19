import Link from "@remix-run/react";

// import { Link } from "remix";

export default function Layout({ children }) {
  return (
    <>
      <nav className="Navbar">
        <Link to="/" className="navbar-logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
