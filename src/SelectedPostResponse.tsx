import { useEffect, useState } from 'react';

import { fetchPost } from './fetchFunction.ts';
import type { PostResponse } from './types';

export default function SelectedPostResponse({
  selectedPostId,
}: {
  selectedPostId: string;
}) {
  const [post, setPost] = useState<PostResponse>();

  useEffect(() => {
    let ignore = false;
    fetchPost(selectedPostId)
      .then((data) => {
        if (!ignore) setPost(data);
      })
      .catch(() => {
        alert('페이지를 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [selectedPostId]);

  return <p>{post != null ? post.body : 'Loading...'}</p>;
}
