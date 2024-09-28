import { useEffect, useState } from 'react';

import { fetchReply } from './fetchFunction.ts';
import type { ReplyResponse } from './types';

export default function SelectedReplyResponse({
  selectedPost,
}: {
  selectedPost: string;
}) {
  const [reply, setReply] = useState<ReplyResponse>();

  useEffect(() => {
    let ignore = false;
    fetchReply(selectedPost)
      .then((data) => {
        if (!ignore) setReply(data);
      })
      .catch(() => {
        alert('페이지를 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [selectedPost]);

  return (
    <>
      <p>작성자: {reply != null ? reply.email : 'Loading...'}</p>
      <p>{reply != null ? reply.body : 'Loading...'}</p>
    </>
  );
}
