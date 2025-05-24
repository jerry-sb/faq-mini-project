"use client";

import { useEffect, useState } from "react";

import { cn } from "@/features/common/utils/tailwind-util";

export default function ScrollToTopButton() {
   const [visible, setVisible] = useState(false);
   const [isAnchorVisible, setIsAnchorVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => setIsAnchorVisible(entry.isIntersecting),
         { threshold: 0 }
      );

      const anchor = document.getElementById("scroll-anchor");
      if (anchor) observer.observe(anchor);

      return () => {
         if (anchor) observer.unobserve(anchor);
      };
   }, []);

   useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > 200);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <button
         onClick={handleClick}
         aria-label="맨 위로 이동"
         className={cn(
            "bottom-8",
            isAnchorVisible ? "absolute" : "fixed",
            "right-8 z-50 p-3 rounded-full bg-white",
            "border border-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.25)]",
            "transition-all duration-300 ease-in-out",
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75",
            "hover:bg-gray-100"
         )}>
         <span
            className="block w-6 h-6 bg-[url('/svg/ic_top.svg')] bg-no-repeat bg-center bg-contain"
            aria-hidden
         />
      </button>
   );
}
