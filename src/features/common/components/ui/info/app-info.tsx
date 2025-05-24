import Link from "next/link";

import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";

const buttonClass = cn(
   "flex items-center justify-center bg-white rounded-[8px] font-semibold mx-[8px]",
   "w-full w-[264px] h-[48px] text-[14px] mt-[12px]",
   "md:h-[56px]",
   "lg:w-[392px] lg:h-[64px] lg:mx-[16px] lg:text-[18px]"
);

const iconClassBase = cn(
   "w-[24px] h-[24px] mr-[4px]",
   "md:w-[28px] md:h-[28px]",
   "lg:w-[32px] lg:h-[32px]"
);

const AppStoreButton = ({
   href,
   text,
   type,
}: {
   href: string;
   text: string;
   type: "google" | "apple";
}) => {
   return (
      <Link
         href={href}
         target="_blank"
         rel="noreferrer"
         className={buttonClass}>
         <BgAutoImage
            url={
               type === "google"
                  ? "/svg/logo_googleplay.svg"
                  : "/svg/logo_appstore.svg"
            }
            className={iconClassBase}
         />
         {text}
      </Link>
   );
};

export default function AppInfo() {
   return (
      <div
         className={cn(
            "flex flex-wrap flex-col justify-center items-center p-[24px]",
            "mt-[48px] rounded-[16px] bg-custom-gray-10",
            "md:flex-row",
            "lg:mt-[64px] lg:p-[40px]"
         )}>
         <h2
            className={cn(
               "w-full mb-[6px] text-center text-[16px] leading-[1.4] font-bold",
               "md:text-[20px] md:mb-[24px] lg:text-[24px] xl:text-[32px] "
            )}>
            <em className="text-midnight-900">기아 비즈 App </em>
            지금 만나보세요!
         </h2>

         <AppStoreButton
            href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
            text="Google Play"
            type="google"
         />
         <AppStoreButton
            href="https://apps.apple.com/kr/app/id1598065794"
            text="App Store"
            type="apple"
         />
      </div>
   );
}
