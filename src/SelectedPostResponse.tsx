import { useEffect, useState } from 'react';

import { fetchPost } from './fetchFunction.ts';
import type { PostResponse } from './types';

export default function SelectedPostResponse({
  selectedPost,
}: {
  selectedPost: string;
}) {
  const [post, setPost] = useState<PostResponse>();

  useEffect(() => {
    let ignore = false;
    fetchPost(selectedPost)
      .then((data) => {
        if (!ignore) setPost(data);
      })
      .catch(() => {
        alert('페이지를 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [selectedPost]);

  return <p>{post != null ? post.body : 'Loading...'}</p>;
}
