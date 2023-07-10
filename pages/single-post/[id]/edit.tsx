import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { PageContainer } from "@features/ui";
import { EditPost } from "@features/single-post";
import { getPost } from "pages/api/posts/[id]";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://post-to.vercel.app/api/posts");
  if (!res.ok) {
    console.error("Error getting static paths response props");
  }
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
  const params = context.params!;
  const res = await getPost(params.id);
  if (!res.ok) {
    console.error("Error getting res props");
  }
  const postData = await res.json();

  // Fetch additional data for pre-filling form fields (e.g., title, desc, content)
  const dataRes = await fetch("https://post-to.vercel.app/api/posts");
  if (!dataRes.ok) {
    console.error("Error getting static properties");
  }
  const data = await dataRes.json();
  return {
    props: {
      post: JSON.parse(JSON.stringify(postData)),
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
