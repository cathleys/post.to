import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { PageContainer } from "@features/ui";
import { EditPost } from "@features/single-post";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");

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
export const getStaticProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "*",
    },
  });
  const data = await res.json();
  return { props: { post: data } };
};

const EditPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = post;
  return (
    <PageContainer>
      <EditPost post={data} />
    </PageContainer>
  );
};

export default EditPage;
