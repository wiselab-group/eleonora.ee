import { useRef } from "react";

const RESUME_AFTER_IDLE_MS = 4000;

/**
 * Marquees are paused via CSS :hover/:focus-within, which a touch tap never
 * triggers. This hook pauses the animation on touch/pointer interaction and
 * resumes it after a period of idleness, so mobile behaves like desktop
 * (autoplay) while still letting a visitor swipe the track by hand.
 */
export function useMarqueePause() {
  const trackRef = useRef<HTMLDivElement>(null);
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

  return {
    trackRef,
    interactionHandlers: {
      onPointerDown: pause,
      onTouchMove: pause,
    },
  };
}
