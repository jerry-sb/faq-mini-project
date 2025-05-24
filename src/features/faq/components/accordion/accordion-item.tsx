import { AccordionItemBase } from "@/features/common/types";
import AccordionButton from "@/features/faq/components/accordion/accordion-button";
import AccordionDetail from "@/features/faq/components/accordion/accordion-detail";

interface AccordionItemProps<T extends AccordionItemBase> {
   item: T;
   index: number;
   isOpen: boolean;
   onToggle: (index: number) => void;
}

export function AccordionItem<T extends AccordionItemBase>({
   item,
   index,
   isOpen,
   onToggle,
}: AccordionItemProps<T>) {
   const buttonId = `accordion-button-${index}`;
   const panelId = `accordion-panel-${index}`;

   return (
      <section className="relative border-b border-custom-gray-100">
         <AccordionButton<T>
            item={item}
            isOpen={isOpen}
            buttonId={buttonId}
            panelId={panelId}
            onClick={() => onToggle(index)}
         />
         <AccordionDetail
            isOpen={isOpen}
            panelId={panelId}
            buttonId={buttonId}
            html={item.answer}
         />
      </section>
   );
}
