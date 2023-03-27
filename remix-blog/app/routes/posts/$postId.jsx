import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });
};

export default function Post() {
  return (
    <div className="Post">
      <h2>Post {"Post"}</h2>
    </div>
  );
}
