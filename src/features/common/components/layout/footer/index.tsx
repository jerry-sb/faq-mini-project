"use client";

import FooterAddress from "@/features/common/components/layout/footer/footer-address";
import FooterButton from "@/features/common/components/layout/footer/footer-button";
import FooterCopyright from "@/features/common/components/layout/footer/footer-copyright";
import { cn } from "@/features/common/utils/tailwind-util";

export default function Footer() {
   return (
      <footer className="px-side bg-midnight-900 text-custom-gray-400">
         <div id="scroll-anchor" className="h-1" />
         <div
            className={cn(
               "flex flex-col justify-between h-footer",
               "max-w-max-width mx-auto leading-footer text-custom-md",
               "pt-[18px] pb-[29px]",
               "md:pt-[34px] md:pb-[44px]",
               "lg:flex-row-reverse lg:items-center"
            )}>
            <div className="flex flex-col">
               <div
                  className={cn(
                     "flex justify-start flex-wrap",
                     "md:mb-0",
                     "lg:justify-end lg:mb-[10px]"
                  )}>
                  <FooterButton
                     url={"https://privacy.kia.com/overview/full-policy"}
                     name={"개인정보 처리방침"}
                     blank
                  />
                  <FooterButton url={"/"} name={"이용약관"} />
               </div>
               <FooterAddress />
            </div>
            <FooterCopyright />
         </div>
      </footer>
   );
}
