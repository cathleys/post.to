import { EditPost } from "@features/single-post";
import { Loader, PageContainer } from "@features/ui";
import axios from "axios";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const editPost = useQuery(["post", id], async () => {
    return axios(`https://post-to.vercel.app/api/posts/${id}`);
  });
  const getPost = useQuery("post", async () => {
    return axios(`https://post-to.vercel.app/api/posts`);
  });
  const post = editPost?.data?.data.data || {};
  const data = getPost?.data?.data?.data || {};

  if (editPost.isLoading) {
    return <Loader />;
  }
  if (editPost.isError) {
    return <h2>Something went wrong, refresh browser.</h2>;
  }
  return (
    <PageContainer>
      {" "}
      <EditPost post={post} data={data} />{" "}
    </PageContainer>
  );
};

export default EditPage;
