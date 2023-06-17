import fetch from "isomorphic-fetch";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.VERCEL_URL ||
    process.env.VERCEL_BRANCH_URL ||
    "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/posts`);
  const { data } = await res.json();

  return data;
}
