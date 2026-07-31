import { useLayoutEffect, useRef, useState } from "react";

interface PillRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

function measure(node: HTMLElement): PillRect {
  return {
    x: node.offsetLeft,
    y: node.offsetTop,
    width: node.offsetWidth,
    height: node.offsetHeight,
  };
}

/** Tracks a sliding "pill" background that follows the active tab in a tablist. */
export function useTabPill(active: string) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const [pill, setPill] = useState<PillRect | null>(null);
  const [skipPillAnimation, setSkipPillAnimation] = useState(true);
  const isFirstMeasure = useRef(true);
  const activeRef = useRef(active);

  useLayoutEffect(() => {
    activeRef.current = active;
    const node = tabRefs.current.get(active);
    if (node) {
      setPill(measure(node));
    }
    setSkipPillAnimation(isFirstMeasure.current);
    isFirstMeasure.current = false;
  }, [active]);

  useLayoutEffect(() => {
    const list = tabListRef.current;
    if (!list) return;
    let skippedInitialCall = false;
    const observer = new ResizeObserver(() => {
      if (!skippedInitialCall) {
        skippedInitialCall = true;
        return;
      }
      requestAnimationFrame(() => {
        const node = tabRefs.current.get(activeRef.current);
        if (node) {
          setSkipPillAnimation(true);
          setPill(measure(node));
        }
      });
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  const registerTab = (id: string) => (node: HTMLButtonElement | null) => {
    if (node) tabRefs.current.set(id, node);
    else tabRefs.current.delete(id);
  };

  return { tabListRef, pill, skipPillAnimation, registerTab };
}
