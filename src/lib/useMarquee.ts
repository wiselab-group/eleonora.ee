/**
 * Sizes an infinite marquee's base run in real pixels rather than item count —
 * a handful of unique items must still tile past the widest realistic viewport
 * before the loop point, or the doubled track is narrower than the screen and
 * the mask reveals bare background past both ends.
 */
export function useMarqueeTrack<T>(
  items: T[],
  secondsPerItem: number,
  itemPx: number,
  widestViewportPx = 2600,
) {
  const minBaseRepeats = Math.ceil(widestViewportPx / itemPx);
  const repeats = Math.max(1, Math.ceil(minBaseRepeats / items.length));
  const base = Array.from({ length: repeats }, () => items).flat();
  const duration = `${base.length * secondsPerItem}s`;
  return { base, duration };
}
