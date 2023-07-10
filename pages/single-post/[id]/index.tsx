import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { SinglePost } from "@features/single-post";
import { PageContainer } from "@features/ui";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://post-to.vercel.app/api/posts");

  const data = await res.json();

  const paths = data?.data?.map((post: { _id: string }) => {
    return {
      params: {
        id: `${post?._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(`https://post-to.vercel.app/api/posts/${params?.id}`);
  const data = await res.json();

  return { props: { post: data } };
};
const SinglePostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = post;
  return (
    <PageContainer>
      <SinglePost post={data} />
    </PageContainer>
  );
};

export default SinglePostPage;
