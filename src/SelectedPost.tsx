import { useEffect, useState } from 'react';

import { fetchPost, fetchReply } from './fetchFunction';
import styles from './SelectedPost.module.css';
import type { PostResponse, ReplyResponse } from './types.ts';

export default function ParentComponent({
  selectedPostId,
}: {
  selectedPostId: string;
}) {
  const [postData, setPostData] = useState<PostResponse>();
  const [replyData, setReplyData] = useState<ReplyResponse[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchPost(selectedPostId), fetchReply(selectedPostId)])
      .then(([postResult, replyResult]) => {
        setPostData(postResult);
        setReplyData(replyResult);
        setIsLoading(false);
      })
      .catch((error: unknown) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [selectedPostId]);

  if (isLoading) {
    return (
      <>
        <h2 className={styles.gloria}>Content</h2>
        <p>Loading...</p>
        <h2 className={styles.gloria}>Reply</h2>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h2 className={styles.gloria}>Content</h2>
      <SelectedPostResponse post={postData} />
      <h2 className={styles.gloria}>Reply</h2>
      <SelectedReplyResponse replies={replyData} />
    </>
  );
}

function SelectedPostResponse({ post }: { post: PostResponse | undefined }) {
  return (
    <p className={styles.indie}>
      {post != undefined ? post.body : 'No content available'}
    </p>
  );
}

function SelectedReplyResponse({
  replies,
}: {
  replies: ReplyResponse[] | undefined;
}) {
  return (
    <>
      {replies != undefined && replies.length > 0 ? (
        replies.map((reply) => (
          <div key={reply.id} className={styles.indie}>
            <p>
              <span className="font-bold">writer: </span>
              {reply.email}
            </p>
            <p className={styles.borderBottom}>{reply.body}</p>
          </div>
        ))
      ) : (
        <p className={styles.indie}>No replies available</p>
      )}
    </>
  );
}
