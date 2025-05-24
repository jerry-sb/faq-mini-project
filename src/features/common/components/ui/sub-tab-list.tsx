"use client";

import useTabWithSearchParams from "@/features/common/hooks/use-tab-with-search-params";
import { TabItems } from "@/features/common/types";
import { cn } from "@/features/common/utils/tailwind-util";

interface SubTabListProps<T extends string> {
   tabs: TabItems<T>;
}

export default function SubTabList<T extends string>({
   tabs,
}: SubTabListProps<T>) {
   const { activeIndex, onTabClick } = useTabWithSearchParams(
      tabs,
      tabs[0].value,
      "category"
   );

   return (
      <ul className="flex flex-wrap gap-y-2 mb-pxMd">
         {tabs.map((cat, idx) => (
            <li key={cat.value}>
               <button
                  role="tab"
                  onClick={() => onTabClick(idx)}
                  aria-selected={idx === activeIndex}
                  className={cn(
                     "text-[15px] md:text-[16px] lg:text-[18px] px-3 lg:px-5 font-bold h-btnMd whitespace-nowrap",
                     idx === activeIndex &&
                        "rounded-[20px] lg:rounded-full bg-black text-white"
                  )}>
                  {cat.label}
               </button>
            </li>
         ))}
      </ul>
   );
}
