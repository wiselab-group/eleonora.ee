import { useRef } from "react";

const RESUME_AFTER_IDLE_MS = 4000;

/**
 * Marquees are paused via CSS :hover/:focus-within, which a touch tap never
 * triggers. This hook pauses the animation on touch/pointer interaction and
 * resumes it after a period of idleness, so mobile behaves like desktop
 * (autoplay) while still letting a visitor swipe the track by hand.
 *
 * The track itself is doubled (`[base, base]`) so the CSS animation can loop
 * seamlessly via transform. A manual drag/scroll doesn't go through that
 * transform though — it scrolls the container's real content, which runs out
 * once the visitor reaches the end of the second copy. `scrollRef` listens
 * for that and silently rewraps `scrollLeft` back by one copy-width, so
 * dragging past either end feels infinite instead of hitting empty space.
 */
export function useMarqueePause() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const pause = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.animationPlayState = "paused";
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      track.style.animationPlayState = "running";
    }, RESUME_AFTER_IDLE_MS);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const copyWidth = el.scrollWidth / 2;
    if (el.scrollLeft <= 0) {
      el.scrollLeft += copyWidth;
    } else if (el.scrollLeft >= copyWidth) {
      el.scrollLeft -= copyWidth;
    }
  };

  return {
    trackRef,
    scrollRef,
    interactionHandlers: {
      onPointerDown: pause,
      onTouchStart: pause,
      onTouchMove: pause,
      onScroll: handleScroll,
    },
  };
}
