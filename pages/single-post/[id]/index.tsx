import { SinglePost } from "@features/single-post";
import { Loader, PageContainer } from "@features/ui";
import axios from "axios";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const SinglePostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const singlePost = useQuery(["post", id], async () => {
    return axios(`https://post-to.vercel.app/api/posts/${id}`) as any;
  });
  const post = singlePost?.data?.data?.data || {};

  if (singlePost.isLoading) {
    return <Loader />;
  }
  if (singlePost.isError) {
    return <h2>Something went wrong, refresh browser.</h2>;
  }
  return (
    <PageContainer>
      {" "}
      <SinglePost post={post} />{" "}
    </PageContainer>
  );
};

export default SinglePostPage;
