import { useEffect, useState } from "react";

// Phone-only position indicator for a `.swipe-row`.
const SwipeDots = ({ targetRef, count }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const row = targetRef.current;
    if (!row) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = row.scrollWidth - row.clientWidth;
      setActive(max > 0 ? Math.round((row.scrollLeft / max) * (count - 1)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    row.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      row.removeEventListener("scroll", onScroll);
    };
  }, [targetRef, count]);

  return (
    <div aria-hidden="true" className="mt-4 flex justify-center gap-1.5 sm:hidden">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-brand" : "w-1.5 bg-brand/25"}`}
        />
      ))}
    </div>
  );
};

export default SwipeDots;
