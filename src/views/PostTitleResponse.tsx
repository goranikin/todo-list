import { usePost } from '../hooks/usePost.ts';

export const PostTitleItem = ({ id }: { id: string }) => {
  const post = usePost(id);

  return <>{post != null ? post.title : 'Loading...'}</>;
};
