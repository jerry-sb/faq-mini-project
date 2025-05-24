import { useCallback, useMemo } from "react";

import useQueryParams from "@/features/common/hooks/use-query-params";
import { TabItems } from "@/features/common/types";

export default function useTabWithSearchParams<T>(
   tabList: TabItems<T>,
   defaultValue: T,
   paramKey: string = "tab"
) {
   const query = useQueryParams();

   const selectedValue = (query.get(paramKey) as T) || defaultValue;
   const activeIndex = useMemo(
      () => tabList.findIndex((t) => t.value === selectedValue),
      [selectedValue, tabList]
   );

   const onTabClick = useCallback(
      (index: number) => {
         const newValue = tabList[index].value;
         query.set(paramKey, String(newValue));
      },
      [tabList, query, paramKey]
   );

   const resetAndClick = useCallback(
      (index: number) => {
         const value = String(tabList[index].value);
         const newParams = new URLSearchParams();
         newParams.set(paramKey, value);
         query.router.replace(`${query.pathname}?${newParams.toString()}`, {
            scroll: false,
         });
      },
      [tabList, query, paramKey]
   );

   return {
      activeIndex,
      onTabClick,
      resetAndClick,
   };
}
