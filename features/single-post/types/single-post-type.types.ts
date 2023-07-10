export type SinglePostType = {
  _id?: string;
  title: string;
  desc?: string;
  content: string;
  imageUrl: string;
  username: string;
  authorId: { _id: string; username: string; profilePic: string };
  createdAt: Date;
  updatedAt: Date;
};
