import { useEffect, useState } from 'react';

import { fetchReply } from './fetchFunction.ts';
import type { ReplyResponse } from './types';

export default function SelectedReplyResponse({
  selectedPostId,
}: {
  selectedPostId: string;
}) {
  const [replies, setReplies] = useState<ReplyResponse[]>([]);

  useEffect(() => {
    let ignore = false;
    fetchReply(selectedPostId)
      .then((data) => {
        if (!ignore) setReplies(data);
      })
      .catch(() => {
        alert('댓글을 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [selectedPostId]);

  return (
    <>
      {replies.length > 0 ? (
        replies.map((reply) => (
          <div key={reply.id}>
            <p>writer: {reply.email}</p>
            <p>{reply.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
