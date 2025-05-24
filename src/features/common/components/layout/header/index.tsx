"use client";
import React, { useState } from "react";

import HeaderButton from "@/features/common/components/layout/header/header-button";
import HeaderLogo from "@/features/common/components/layout/header/header-logo";
import HeaderNav from "@/features/common/components/layout/header/header-nav";
import HeaderSticky from "@/features/common/components/layout/header/header-sticky";
import { cn } from "@/features/common/utils/tailwind-util";

export default function Header({
   className,
   ...props
}: React.HTMLAttributes<HTMLElement>) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [pinned, setPinned] = useState(false);

   return (
      <>
         <HeaderSticky onChange={setPinned} />
         <header
            {...props}
            className={cn(
               "top-0 sticky bg-white z-[100] px-side",
               pinned ? "shadow-header" : "",
               className
            )}>
            <div className="h-header w-full flex items-center flex-wrap max-w-max-width">
               <HeaderLogo />
               <HeaderNav isOpen={isOpen} />
               <HeaderButton
                  isOpen={isOpen}
                  onToggle={() => setIsOpen(!isOpen)}
               />
            </div>
         </header>
      </>
   );
}
