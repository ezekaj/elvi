import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts
 * Useful for page navigation and ensuring users start at the top of each page
 * Uses smooth scrolling behavior for better UX
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
};

export default useScrollToTop;
