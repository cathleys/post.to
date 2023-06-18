import fetch from "isomorphic-fetch";

export async function loadPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "127.0.0.1";
  const res = await fetch(`${baseUrl}/api/posts`);
  const { data } = await res.json();

  return data;
}
