import fetch from "isomorphic-fetch";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  // const baseUrl =
  //   process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const res = await fetch("http://localhost:3000/api/posts");
  const { data } = await res.json();

  return data;
}
