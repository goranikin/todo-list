import './reset.css';

import { useRef, useState } from 'react';

import { PostTitleItem } from './PostTitleResponse.tsx';
import SelectedPost from './SelectedPost.tsx';
import { useKeyboardNavigation } from './useKeyboardNavigation.ts';
import { useScrollIntoView } from './useScrollIntoView.ts';

export const App = () => {
  const [selectedPostId, setSelectedPostId] = useState<string>('1');
  const selectedRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useKeyboardNavigation(setSelectedPostId, 100);
  useScrollIntoView(selectedPostId, selectedRef, containerRef);

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="left-wrapper" ref={containerRef}>
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
