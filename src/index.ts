import { useEffect, useState } from "react";

export function useIsMatchMedia(mediaQueryString: string) {
  const [isMatch, setIsMatch] = useState(() => {
    return window ? window.matchMedia(mediaQueryString).matches : false;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [mediaQueryString]);

  return isMatch;
}