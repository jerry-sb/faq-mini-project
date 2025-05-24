"use client";

import useQueryParams from "@/features/common/hooks/use-query-params";
import BgAutoImage from "@/ui/bg-auto-image";

export default function SearchResultHeader({ total }: { total: number }) {
   const query = useQueryParams();
   const question = query.get("question");

   const handleReset = () => {
      query.delete("question");
   };

   if (!question) return null;

   return (
      <div
         className="justify-between flex flex-1 py-pxMd items-center"
         aria-label="검색 결과 영역">
         <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            검색 결과 총 {total}건
         </h2>
         <button
            type="button"
            onClick={handleReset}
            className="flex gap-2 items-center"
            aria-label="검색 초기화">
            <BgAutoImage url="/svg/ic_init.svg" className="h-ic-sm w-ic-sm" />
            <span>검색 초기화</span>
         </button>
      </div>
   );
}
