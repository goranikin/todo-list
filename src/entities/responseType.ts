export type PostResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type ReplyResponse = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
