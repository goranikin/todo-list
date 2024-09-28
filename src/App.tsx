import './reset.css';

import { useEffect, useRef, useState } from 'react';

import { PostTitleItem } from './PostTitleResponse.tsx';
import SelectedPost from './SelectedPost.tsx';

export const App = () => {
  const [selectedPostId, setSelectedPostId] = useState<string>('1');
  const selectedRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setSelectedPostId((prevId) => {
          const newId = Math.max(1, parseInt(prevId) - 1);
          return newId.toString();
        });
      } else if (event.key === 'ArrowDown') {
        setSelectedPostId((prevId) => {
          const newId = Math.min(100, parseInt(prevId) + 1);
          return newId.toString();
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (selectedRef.current != null && containerRef.current != null) {
      const container = containerRef.current;
      const selected = selectedRef.current;

      const containerRect = container.getBoundingClientRect();
      const selectedRect = selected.getBoundingClientRect();

      if (selectedRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - selectedRect.top + 20;
      } else if (selectedRect.bottom > containerRect.bottom) {
        container.scrollTop += selectedRect.bottom - containerRect.bottom + 20;
      }
    }
  }, [selectedPostId]);

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
