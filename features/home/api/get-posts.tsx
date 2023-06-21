import axios from "axios";

export async function getPosts() {
  const { data } = await axios("http://localhost:3000/api/posts");
  return data;
}
