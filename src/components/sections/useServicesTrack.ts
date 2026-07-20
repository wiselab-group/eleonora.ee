import { useEffect, useState } from "react";

export function useTrackScrollDistance(
  trackRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node || !enabled) return;

    const measure = () => {
      setDistance(Math.max(node.scrollWidth - window.innerWidth, 0));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [trackRef, enabled]);

  return distance;
}

export function useViewportHeight(enabled: boolean) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const measure = () => setHeight(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [enabled]);

  return height;
}
