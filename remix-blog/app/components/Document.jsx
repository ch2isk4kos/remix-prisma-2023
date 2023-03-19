import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : "Title Tag"}</title>
      </head>
      <body>
        {children}
        {/* {process.env.NODE_ENV === "development" ? <LiveReload /> : null} */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
