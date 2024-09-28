import './reset.css';

import { useRef, useState } from 'react';

import { PostList } from './PostList.tsx';
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
            <PostList
              selectedPostId={selectedPostId}
              setSelectedPostId={setSelectedPostId}
              selectedRef={selectedRef}
            />
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
