import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";

export default function FooterCopyright() {
   return (
      <div className="flex flex-col items-start text-custom-gray-400 text-custom-md">
         <BgAutoImage
            url={"/svg/logo_kia.svg"}
            className={cn(
               "w-[120px] h-[32px]",
               "mb-[1px]",
               "md:h-[48px]",
               "lg:h-[56px] lg:mb-[2px]"
            )}
         />
         <p>© 2023 KIA CORP. All Rights Reserved.</p>
      </div>
   );
}
