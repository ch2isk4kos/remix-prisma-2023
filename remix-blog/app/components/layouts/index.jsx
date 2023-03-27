import { Link } from "@remix-run/react";

export default function Layout({ children }) {
  return (
    <>
      {/* NAVIGATION */}
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
      {/* CONTENT */}
      <div className="container">{children}</div>
    </>
  );
}
