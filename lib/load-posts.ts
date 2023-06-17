import fetch from "isomorphic-fetch";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const baseUrl = "http://127.0.0.1:80";
  const res = await fetch(`${baseUrl}/api/posts`);
  const { data } = await res.json();

  return data;
}
