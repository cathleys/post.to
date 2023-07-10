import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { PageContainer } from "@features/ui";
import { EditPost } from "@features/single-post";

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
export const getStaticProps = async (context: any) => {
  const { params } = context;
  const postRes = await fetch(
    `https://post-to.vercel.app/api/posts/${params?.id}`
  );
  const postData = await postRes.json();

  // Fetch additional data for pre-filling form fields (e.g., title, desc, content)
  const dataRes = await fetch("https://post-to.vercel.app/api/posts");
  const data = await dataRes.json();
  return {
    props: {
      post: postData,
      data: data?.data || [], // Pass the additional data to the component
    },
  };
};

const EditPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageContainer>
      <EditPost post={post} />
    </PageContainer>
  );
};

export default EditPage;
