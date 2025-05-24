import { cn } from "@/features/common/utils/tailwind-util";

export default function SearchClearButton({
   onClick,
}: {
   onClick: () => void;
}) {
   return (
      <button
         type="button"
         onClick={onClick}
         aria-label="입력 내용 지우기"
         className={cn(
            "absolute top-[1px] right-[calc(1px+3rem-2px)] flex items-center justify-center",
            "bg-[url('/svg/ic_clear.svg')] bg-no-repeat bg-center bg-contain font-0",
            "md:w-[25px] h-[calc(100%-2px)] w-[22px]"
         )}>
         <span className="sr-only">다시입력</span>
      </button>
   );
}
