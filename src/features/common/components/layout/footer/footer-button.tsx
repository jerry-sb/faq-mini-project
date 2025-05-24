import Link from "next/link";

import { cn } from "@/features/common/utils/tailwind-util";

export default function FooterButton({
   url,
   name,
   blank = false,
}: {
   url: string;
   name: string;
   blank?: boolean;
}) {
   return (
      <Link
         href={url}
         target={blank ? "_blank" : ""}
         className={cn(
            "text-[14px] text-white font-bold",
            "leading-[48px] md:leading-[52px] lg:leading-footer",
            "mr-[16px] md:mr-[24px] lg:mr-0 lg:ml-[24px] md:text-[16px]"
         )}>
         {name}
      </Link>
   );
}
