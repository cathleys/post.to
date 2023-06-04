import type { NextPage } from "next";
import { CreatePost, PageContainer } from "@features/index";

const CreatePostPage: NextPage = () => {
  return (
    <PageContainer>
      <CreatePost />
    </PageContainer>
  );
};
export default CreatePostPage;
