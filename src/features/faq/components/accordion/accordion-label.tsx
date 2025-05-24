import { AccordionItemBase } from "@/features/common/types";

interface LabelProps<T extends AccordionItemBase> {
   item: T;
}

export default function AccordionLabel<T extends AccordionItemBase>({
   item,
}: LabelProps<T>) {
   return (
      <>
         <em className="text-left text-base text-custom-gray-500 lg:hidden">
            {item.label} &gt; {item.subLabel}
         </em>
         <div className="hidden lg:flex lg:items-center">
            <em className="text-faq text-custom-gray-500 lg:w-[8em]">
               {item.label}
            </em>
            <em className="text-faq text-custom-gray-500 lg:w-[6em]">
               {item.subLabel}
            </em>
         </div>
      </>
   );
}
