"use client";

import useTabWithSearchParams from "@/features/common/hooks/use-tab-with-search-params";
import { TabItems } from "@/features/common/types";
import { cn } from "@/features/common/utils/tailwind-util";

interface TabListProps<T extends string> {
   tabs: TabItems<T>;
}

export default function TabList<T extends string>({ tabs }: TabListProps<T>) {
   const { activeIndex, resetAndClick } = useTabWithSearchParams(
      tabs,
      tabs[0].value,
      "tab"
   );

   return (
      <div className="flex mb-pxLg">
         {tabs.map((tab, index) => (
            <button
               role={"tab"}
               key={tab.value}
               onClick={() => resetAndClick(index)}
               className={cn(
                  "min-h-btnXlg2 flex-1 flex items-center justify-center text-tab font-[500]",
                  index !== 0 && "-ml-px",
                  "border border-solid border-midnight-100",
                  "aria-selected:bg-midnight-900 aria-selected:text-white"
               )}
               aria-selected={index === activeIndex}>
               {tab.label}
            </button>
         ))}
      </div>
   );
}
