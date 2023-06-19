import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SinglePost, PageContainer } from "@features/index";
import { ObjectId } from "mongodb";
import { getPost } from "pages/api/posts/[id]";

export type PostProps = {
  _id: ObjectId;
  title: string;
  content: string;
  desc: string;
  photo: string;
  author: string;
};
const SinglePostPage: NextPage = ({ post }: any) => {
  return (
    <PageContainer>
      <SinglePost {...post} />
    </PageContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const data = await getPosts();
  // console.log("staticpath", data);
  // const paths = data.map((post: ObjectId) => {
  //   return {
  //     params: {
  //       id: `${post.id}`
  //     }
  //   };
  // });
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  if (!params || !params.id || Array.isArray(params.id)) {
    return {
      notFound: true,
    };
  }

  try {
    const data = await getPost(params.id);

    if (!data) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }
    return {
      props: { post: JSON.parse(JSON.stringify(data)) },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

export default SinglePostPage;
