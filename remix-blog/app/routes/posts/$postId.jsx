import { useParams } from "@remix-run/react";

export default function Post() {
  const params = useParams();

  return (
    <div className="Post">
      <h2>Post {params.postId}</h2>
    </div>
  );
}
