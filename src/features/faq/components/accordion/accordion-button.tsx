import { AccordionItemBase } from "@/features/common/types";
import { cn } from "@/features/common/utils/tailwind-util";
import BgAutoImage from "@/ui/bg-auto-image";

import AccordionLabel from "./accordion-label";

interface QuestionButtonProps<T extends AccordionItemBase> {
   item: T;
   isOpen: boolean;
   buttonId: string;
   panelId: string;
   onClick: () => void;
}

export default function AccordionButton<T extends AccordionItemBase>({
   item,
   isOpen,
   buttonId,
   panelId,
   onClick,
}: QuestionButtonProps<T>) {
   return (
      <button
         id={buttonId}
         aria-controls={panelId}
         aria-expanded={isOpen}
         onClick={onClick}
         className={cn(
            "relative w-full flex flex-col gap-2 lg:flex-row lg:items-center lg:px-4",
            "py-3 md:py-5",
            "hover:bg-custom-gray-10 focus:outline-none focus-visible:ring",
            "leading-sm text-faq"
         )}>
         <AccordionLabel item={item} />
         <strong className="text-left font-[600] lg:pl-8 pr-10 w-full">
            {item.question}
         </strong>
         <BgAutoImage
            url="/svg/ic_arrow.svg"
            className={cn(
               "absolute right-4 top-1/2 translate-y-[-50%] lg:static lg:translate-y-0",
               "shrink-0 w-5 h-5 lg:w-6 lg:h-6",
               "transition-transform duration-300",
               isOpen && "rotate-180"
            )}
         />
      </button>
   );
}
