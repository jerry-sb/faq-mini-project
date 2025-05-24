import { useInfiniteQuery } from "@tanstack/react-query";

import { PageResponse } from "@/features/common/types";
import { FaqItem, FAQTabType } from "@/features/faq/types";

async function getFAQInfinityData<T extends FAQTabType>(
   tab: T,
   category: string,
   offset: number,
   limit: number,
   question?: string
): Promise<PageResponse<FaqItem>> {
   const query = `tab=${tab}&faqCategoryID=${category}&offset=${offset}&limit=${limit}${
      question ? `&question=${encodeURIComponent(question)}` : ""
   }`;

   const response = await fetch(`/api/faq?${query}`);
   if (!response.ok) {
      throw new Error("데이터를 가져오던 중 에러가 발생했습니다.");
   }

   return response.json();
}

export function useFaqInfiniteQuery<T extends FAQTabType>({
   tab,
   category,
   limit,
   question,
   offset,
}: {
   tab: T;
   category: string;
   question?: string;
   limit?: number;
   offset?: number;
}) {
   return useInfiniteQuery<PageResponse<FaqItem>>({
      queryKey: ["faqs", tab, category, question],
      queryFn: ({ pageParam }) =>
         getFAQInfinityData(
            tab,
            category,
            Number(pageParam),
            limit ?? 10,
            question
         ),
      initialPageParam: offset ?? 0,
      getNextPageParam: (lastPage) => {
         const { offset, limit, totalRecord } = lastPage.pageInfo;
         return offset + limit < totalRecord ? offset + limit : undefined;
      },
   });
}
