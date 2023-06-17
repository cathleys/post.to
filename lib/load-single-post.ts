import fetch from "isomorphic-fetch";

export async function loadSinglePost(context: { params: { id: string } }) {
  const { params } = context;
  // Call an external API endpoint to get posts
  const baseUrl = "http://127.0.0.1";
  const res = await fetch(`${baseUrl}/api/posts/${params.id}`);
  const { data } = await res.json();

  return data;
}
