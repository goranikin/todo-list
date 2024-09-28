import React from 'react';

import { PostTitleItem } from './PostTitleResponse';

interface PostListProps {
  selectedPostId: string;
  setSelectedPostId: (id: string) => void;
  selectedRef: React.RefObject<HTMLButtonElement>;
}

export const PostList: React.FC<PostListProps> = ({
  selectedPostId,
  setSelectedPostId,
  selectedRef,
}) => {
  return (
    <>
      <h2 className="gloria-hallelujah-regular">Post Index</h2>
      {Array.from({ length: 100 }, (_, index: number) => {
        const id = (index + 1).toString();
        return (
          <button
            key={id}
            ref={selectedPostId === id ? selectedRef : null}
            className={`title cursor-pointer indie-flower-regular ${selectedPostId === id ? 'selected' : ''}`}
            onClick={() => {
              setSelectedPostId(id);
            }}
          >
            <span>{id}. </span>
            <span>{PostTitleItem({ id })}</span>
          </button>
        );
      })}
    </>
  );
};
