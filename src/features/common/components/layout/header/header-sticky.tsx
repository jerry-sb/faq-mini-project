import { useEffect } from "react";

interface HeaderStickyProps {
   onChange: (pinned: boolean) => void;
}

export default function HeaderSticky({ onChange }: HeaderStickyProps) {
   useEffect(() => {
      const target = document.querySelector("#sticky-checker");
      if (!target) return;

      const observer = new IntersectionObserver(
         ([entry]) => onChange(!entry.isIntersecting),
         { threshold: 0 }
      );

      observer.observe(target);
      return () => observer.disconnect();
   }, [onChange]);

   return <div id="sticky-checker" className="h-[0px] w-full" />;
}
