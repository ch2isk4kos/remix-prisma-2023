import Document from "./components/layouts/Document";
import Layout from "./components/layouts/Layout";
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
