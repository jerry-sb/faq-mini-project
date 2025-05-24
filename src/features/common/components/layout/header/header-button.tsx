import { cn } from "@/features/common/utils/tailwind-util";

interface HeaderButtonProps {
   isOpen: boolean;
   onToggle: () => void;
}

export default function HeaderButton({ isOpen, onToggle }: HeaderButtonProps) {
   return (
      <span className={cn("lg:hidden", "mr-[-8px] flex-1 justify-end flex")}>
         <button
            type="button"
            aria-label="메뉴 열기/닫기"
            aria-expanded={isOpen}
            aria-controls="header-nav"
            onClick={onToggle}
            className={cn(
               "relative block w-[24px] h-[2px] bg-black transition-all duration-700",
               "before:content-[''] before:absolute before:top-[-8px] before:left-0",
               "before:w-[24px] before:h-[2px] before:bg-black before:transition-all before:duration-700",
               "after:content-[''] after:absolute after:top-[8px] after:left-0",
               "after:w-[24px] after:h-[2px] after:bg-black after:transition-all after:duration-700",
               isOpen &&
                  "bg-transparent before:rotate-45 before:top-0 after:-rotate-45 after:top-0"
            )}></button>
      </span>
   );
}
