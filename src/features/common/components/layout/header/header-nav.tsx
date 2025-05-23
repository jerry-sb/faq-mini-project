import { cn } from "@/features/common/utils/tailwind-util";
import { headerNaviItems } from "@/ui/constants/array";

interface HeaderNavProps {
   isOpen: boolean;
}

export default function HeaderNav({ isOpen }: HeaderNavProps) {
   return (
      <nav
         id="header-nav"
         className={cn(
            "fixed top-header bottom-0 left-0 w-full bg-white z-[99] flex flex-col px-side",
            isOpen ? "animate-slide-in-left" : "animate-slide-out-left",
            "lg:animate-none lg:static lg:flex-row lg:top-0 lg:left-0 lg:h-auto lg:w-auto lg:transition-none lg:bg-transparent lg:z-auto lg:flex",
            "lg:mr-[-20px] lg:flex-1 lg:justify-end lg:px-0"
         )}>
         <ul className={cn("flex flex-col mt-[80px]", "lg:flex-row lg:mt-0")}>
            {headerNaviItems.map((item, index) => (
               <li className="lg:mx-[16px]" key={`nav-${index}`}>
                  <a
                     href={item.url}
                     className={cn(
                        "block font-bold text-[24px] leading-[56px] text-center mb-[8px]",
                        "lg:text-[18px] lg:leading-header lg:px-[4px] lg:mb-0 lg:text-left lg:relative"
                     )}>
                     {item.title}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}
