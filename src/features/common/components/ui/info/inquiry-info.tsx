import Link from "next/link";

import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";
import { inquiryInfoItems } from "@/ui/constants/array";

const InquiryLink = ({
   href,
   icon,
   title,
   sub,
   download,
   isLast,
}: {
   href: string;
   icon: string;
   title: string;
   sub?: string;
   download?: boolean;
   isLast?: boolean;
}) => (
   <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      download={download}
      className={cn(
         "flex items-center px-4 justify-start h-btnXxlg min-h-btnXxlg border border-midnight-900 rounded-[2px]",
         "w-full text-midnight-900 font-bold text-[16px]",
         "transition hover:bg-gray-50",
         "md:justify-center",
         "lg:flex-1 lg:mx-[12px]",
         isLast && "md:w-full md:mt-[12px] lg:mt-0",
         !isLast && "md:flex-1"
      )}>
      <BgAutoImage
         url={icon}
         className={"mr-[12px] shrink-0 h-ic-lg w-ic-lg"}
      />
      <div className="flex flex-col">
         <span>{title}</span>
         {sub && (
            <span className="text-[14px] font-normal text-gray-500 mt-[4px]">
               {sub}
            </span>
         )}
      </div>
   </Link>
);

export default function InquiryInfo() {
   return (
      <div
         className={cn(
            "flex flex-col gap-[12px]",
            "md:flex-row md:flex-wrap md:-mx-[12px]",
            "lg:flex-nowrap lg:flex-row"
         )}>
         {inquiryInfoItems.map((item, idx) => (
            <InquiryLink
               key={idx}
               {...item}
               isLast={idx === inquiryInfoItems.length - 1}
            />
         ))}
      </div>
   );
}
