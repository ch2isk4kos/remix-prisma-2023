import Document from "./components/layouts/document";
import Layout from "./components/layouts/index";
import { Outlet } from "@remix-run/react";
import styles from "./styles/global.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Remix Test Drive",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function ErrorBoundary({ error }) {
  console.log("error:", error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
