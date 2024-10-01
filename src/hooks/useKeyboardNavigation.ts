import { useEffect } from 'react';

export const useKeyboardNavigation = (
  setSelectedPostId: React.Dispatch<React.SetStateAction<string>>,
  maxPosts: number,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setSelectedPostId((prevId) => {
          const newId = Math.max(1, parseInt(prevId) - 1);
          return newId.toString();
        });
      } else if (event.key === 'ArrowDown') {
        setSelectedPostId((prevId) => {
          const newId = Math.min(maxPosts, parseInt(prevId) + 1);
          return newId.toString();
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedPostId, maxPosts]);
};
