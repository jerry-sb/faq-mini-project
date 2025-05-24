"use client";

import { useCallback, useState } from "react";

import { cn } from "@/features/common/utils/tailwind-util";
import { AccordionItem } from "@/features/faq/components/accordion/accordion-item";
import SearchResultHeader from "@/features/faq/components/search/search-result-header";
import { useFAQAccordionItems } from "@/features/faq/hooks/use-faq-accordion-items";
import { FAQTabType } from "@/features/faq/types";
import NoDataInfo from "@/ui/info/no-data-info";
import LoadingIndicator from "@/ui/loading-indicator";

export default function AccordionSearchResult({
   tab,
   category,
   question,
}: {
   tab: FAQTabType;
   category: string;
   question?: string;
}) {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   const { allItems, isLoading, isError, hasNextPage, fetchNextPage, total } =
      useFAQAccordionItems({ tab, category, question });

   const toggle = useCallback((index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index));
   }, []);

   if (isLoading) return <LoadingIndicator />;
   if (isError)
      return (
         <NoDataInfo
            message="에러가 발생했습니다"
            className="border-t-2 border-b border-b-custom-gray-100 border-t-midnight-900"
         />
      );

   return (
      <>
         <SearchResultHeader total={total} />
         {allItems.length === 0 ? (
            <NoDataInfo className="border-t-2 border-b border-b-custom-gray-100 border-t-midnight-900" />
         ) : (
            <div className="border-t-2 border-midnight-900">
               {allItems.map((item, index) => (
                  <AccordionItem
                     key={index}
                     item={item}
                     index={index}
                     isOpen={openIndex === index}
                     onToggle={toggle}
                  />
               ))}
               {hasNextPage && (
                  <div className="flex justify-center mt-12">
                     <button
                        onClick={() => fetchNextPage()}
                        className={cn(
                           "inline-flex items-center gap-2 text-lg font-semibold text-gray-800",
                           "hover:text-primary transition-colors"
                        )}>
                        <span className="text-2xl leading-none">+</span>
                        <span className="tracking-tight">더보기</span>
                     </button>
                  </div>
               )}
            </div>
         )}
      </>
   );
}
