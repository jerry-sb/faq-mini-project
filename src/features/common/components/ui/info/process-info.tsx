import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";
import { processInfoItems } from "@/ui/constants/array";

export default function ProcessInfo() {
   return (
      <ol className="flex flex-col gap-[20px] md:gap-[24px] lg:flex-row lg:-mx-[12px]">
         {processInfoItems.map((step, idx) => (
            <li
               key={idx}
               className="flex items-start lg:flex-col flex-1 lg:mx-[12px] px-0 lg:px-[16px]">
               <BgAutoImage
                  url={step.icon}
                  className={"w-ic-xlg h-ic-xlg mb-0 shrink-0 mr-[12px]"}
               />
               <span className="relative block">
                  {idx !== 0 && (
                     <BgAutoImage
                        url={"/svg/ic_step_arrow.svg"}
                        className={cn(
                           "hidden lg:block absolute",
                           "-left-[40px] top-0 w-[24px] h-[24px]"
                        )}
                     />
                  )}
                  <strong className="block text-[16px] md:text-[18px] font-bold">
                     {idx + 1}. {step.title}
                  </strong>
                  <em
                     className={cn(
                        "block text-gray-700 text-[14px] mt-[4px]",
                        "md:mt-[8px] md:text-[16px]"
                     )}>
                     {step.desc}
                  </em>
               </span>
            </li>
         ))}
      </ol>
   );
}
