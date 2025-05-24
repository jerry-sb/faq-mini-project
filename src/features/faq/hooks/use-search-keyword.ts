import { useCallback, useEffect, useState } from "react";

import useQueryParams from "@/features/common/hooks/use-query-params";

export default function useSearchKeyword() {
   const query = useQueryParams();
   const questionValue = query.get("question") ?? "";
   const [keyword, setKeyword] = useState("");

   useEffect(() => {
      setKeyword(questionValue);
   }, [questionValue]);

   const updateKeyword = useCallback(
      (value: string) => {
         setKeyword(value);
      },
      [setKeyword]
   );

   const clearKeyword = useCallback(() => {
      setKeyword("");
      query.delete("question");
   }, [query]);

   const submitKeyword = useCallback(() => {
      if (keyword.trim().length < 2) {
         return false;
      }
      query.set("question", keyword.trim());
      return true;
   }, [keyword, query]);

   return { keyword, updateKeyword, clearKeyword, submitKeyword, setKeyword };
}
