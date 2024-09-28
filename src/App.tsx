import './reset.css';

import { useState } from 'react';

import { PostTitleItem } from './PostTitleResponse.tsx';
import SelectedPostResponse from './SelectedPostResponse.tsx';
import SelectedReplyResponse from './SelectedReplyResponse.tsx';

export const App = () => {
  const [selectedPostId, setSelectedPostId] = useState<string>('1');

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="left-wrapper">
            <h2 className="gloria-hallelujah-regular">Post Index</h2>
            {Array.from({ length: 100 }, (_, index: number) => {
              const id = (index + 1).toString();
              return (
                <button
                  key={id}
                  className="title cursor-pointer indie-flower-regular"
                  onClick={() => {
                    setSelectedPostId(id);
                  }}
                >
                  {id}. {PostTitleItem({ id })}
                </button>
              );
            })}
          </div>
          <div className="middle-line"></div>
          <div className="right-wrapper indie-flower-regular">
            <h2 className="gloria-hallelujah-regular">Content</h2>
            <SelectedPostResponse selectedPostId={selectedPostId} />
            <h2 className="gloria-hallelujah-regular">Reply</h2>
            <SelectedReplyResponse selectedPostId={selectedPostId} />
          </div>
        </div>
      </div>
    </div>
  );
};
