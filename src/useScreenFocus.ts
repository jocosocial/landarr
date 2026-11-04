import {useEffect, useRef} from 'react';

/**
 * Starts each new screen at the top and moves focus to its heading, so people using a screen
 * reader or keyboard hear and land on the new content.
 */
export const useScreenFocus = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    headingRef.current?.focus({preventScroll: true});
  }, []);

  return headingRef;
};
