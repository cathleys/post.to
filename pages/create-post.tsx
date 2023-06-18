import type { NextPage } from "next";
import { PageContainer } from "@features/index";
import { CreatePost } from "@features/create-post";

const CreatePostPage: NextPage = () => {
  return (
    <PageContainer>
      <CreatePost />
    </PageContainer>
  );
};
export default CreatePostPage;
