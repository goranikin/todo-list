import './reset.css';

import { useState } from 'react';

import { PostTitleItem } from './PostTitleResponse.tsx';
import SelectedPost from './SelectedPost.tsx';

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
          </div>
          <div className="middle-line"></div>
          <div className="right-wrapper">
            <SelectedPost selectedPostId={selectedPostId} />
          </div>
        </div>
      </div>
    </div>
  );
};
