import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";

export default function NoDataInfo({
   message = "검색결과가 없습니다.",
   className,
}: {
   message?: string;
   className?: string;
}) {
   return (
      <div
         className={cn(
            "flex flex-col items-center justify-center py-[160px] text-gray-400",
            className
         )}>
         <BgAutoImage
            url={"/svg/ic_nodata.svg"}
            className={"w-ic-xlg h-ic-xlg"}
         />
         <p className="text-[16px] md:text-[18px] mt-5">{message}</p>
      </div>
   );
}
