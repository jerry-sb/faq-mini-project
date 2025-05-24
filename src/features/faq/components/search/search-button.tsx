import { cn } from "@/features/common/utils/tailwind-util";

export default function SearchButton() {
   return (
      <button
         type="submit"
         aria-label="검색"
         className={cn(
            "absolute top-[1px] right-[10px] flex items-center justify-center",
            "bg-[url('/svg/ic_search.svg')] bg-no-repeat bg-center bg-contain font-0",
            "md:w-[30px] h-[calc(100%-2px)] w-[25px]"
         )}>
         <span className="sr-only">검색</span>
      </button>
   );
}
