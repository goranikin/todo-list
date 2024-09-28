import { useEffect, useState } from 'react';

import { fetchPost } from './fetchFunction.ts';
import type { PostResponse } from './types';

export const PostTitleItem = ({ id }: { id: string }) => {
  const [post, setPost] = useState<PostResponse>();

  useEffect(() => {
    let ignore = false;
    fetchPost(id)
      .then((data) => {
        if (!ignore) setPost(data);
      })
      .catch(() => {
        alert('페이지를 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [id]);

  return <>{post != null ? post.title : 'Loading...'}</>;
};
