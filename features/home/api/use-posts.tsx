import axios from "axios";

export async function getArticles() {
  const { data } = await axios.get("/api/posts");
  return data;
}
