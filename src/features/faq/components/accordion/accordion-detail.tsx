import { cn } from "@/features/common/utils/tailwind-util";

interface Props {
   isOpen: boolean;
   panelId: string;
   buttonId: string;
   html: string;
}

export default function AccordionDetail({
   isOpen,
   panelId,
   buttonId,
   html,
}: Props) {
   return (
      <div
         id={panelId}
         role="region"
         aria-labelledby={buttonId}
         tabIndex={-1}
         className={cn(
            "overflow-hidden border-t border-custom-gray-100 bg-white",
            isOpen ? "max-h-[500px] py-8 md:p-8" : "max-h-0 p-0",
            "text-gray-700 leading-lg text-[14px] md:text-[18px] lg:text-[20px]",
            "transition-[max-height,padding] duration-300 ease-in"
         )}>
         <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
   );
}
