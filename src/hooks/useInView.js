import { useEffect, useRef, useState, useMemo } from "react";

// Simple useInView hook returning a ref and boolean `inView`.
// Usage: const [ref, inView] = useInView({ threshold: 0.1 })
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const optionsString = useMemo(() => JSON.stringify(options), [options]);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      JSON.parse(optionsString)
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [optionsString]);

  return [ref, inView];
}
