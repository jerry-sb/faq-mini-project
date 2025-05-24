import { useEffect, useState } from "react";

import { AccordionItemBase } from "@/features/common/types";
import { useFaqInfiniteQuery } from "@/features/faq/hooks/use-faq-Infinite-query";
import { FAQTabType } from "@/features/faq/types";

export function useFAQAccordionItems({
   tab,
   category,
   question,
}: {
   tab: FAQTabType;
   category: string;
   question?: string;
}) {
   const [allItems, setAllItems] = useState<AccordionItemBase[]>([]);

   const { data, fetchNextPage, hasNextPage, isLoading, isError } =
      useFaqInfiniteQuery({ tab, category, question });

   useEffect(() => {
      const merged =
         data?.pages.flatMap((page) =>
            page.items.map((item) => ({
               question: item.question,
               answer: item.answer,
               subLabel: item.subCategoryName,
               label: item.categoryName,
            }))
         ) ?? [];

      setAllItems(merged);
   }, [data]);

   const total = data?.pages[0]?.pageInfo.totalRecord ?? 0;

   return {
      allItems,
      total,
      isLoading,
      isError,
      hasNextPage,
      fetchNextPage,
   };
}
