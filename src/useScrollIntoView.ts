import { type RefObject, useEffect } from 'react';

export const useScrollIntoView = (
  selectedPostId: string,
  selectedRef: RefObject<HTMLButtonElement>,
  containerRef: RefObject<HTMLDivElement>,
) => {
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
  }, [selectedPostId, selectedRef, containerRef]);
};
