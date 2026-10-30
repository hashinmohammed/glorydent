import { useEffect, useState } from "react";

// `offset` is a pixel value, or a function of the viewport height for responsive thresholds.
export default function useScrolledPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = typeof offset === "function" ? offset(window.innerHeight) : offset;
      setPast(window.scrollY > limit);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset]);

  return past;
}
