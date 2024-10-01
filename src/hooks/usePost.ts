import { useEffect, useState } from 'react';

import type { PostResponse } from '../entities/responseType.ts';
import { fetchPost } from '../infrastructures/fetchFunction.ts';

export const usePost = (id: string) => {
  const [post, setPost] = useState<PostResponse>();

  useEffect(() => {
    let ignore = false;
    fetchPost(id)
      .then((data) => {
        if (!ignore) setPost(data);
      })
      .catch(() => {});
    return () => {
      ignore = true;
    };
  }, [id]);

  return post;
};
