import axios from "axios";

export async function getPosts() {
  const { data } = await axios("/api/posts");
  return data;
}
