"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStat({ value, suffix = "", label }) {
  const [currentValue, setCurrentValue] = useState(0);
  const statRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = statRef.current;

    if (!element || hasAnimated.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) {
        return;
      }

      hasAnimated.current = true;
      const startTime = performance.now();
      const duration = 1200;

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setCurrentValue(Number((value * easedProgress).toFixed(1)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.4 });

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={statRef} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-2xl font-bold text-white">{currentValue}{suffix}</div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}
