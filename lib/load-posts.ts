import fetch from "isomorphic-fetch";

export async function loadPosts() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/posts`);
  const { data } = await res.json();

  return data;
}
