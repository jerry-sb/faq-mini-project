import { TabItems } from "@/features/common/types";
import {
   CategoryIDByTab,
   CategoryResponse,
   FAQTabType,
} from "@/features/faq/types";
import SubTabList from "@/ui/sub-tab-list";

export async function AsyncSubTabList<T extends FAQTabType>({
   tab,
}: {
   tab: T;
}) {
   const response = await fetch(
      `${process.env.BASE_URL}/api/faq/category?tab=${tab}`
   );
   if (!response.ok) {
      throw new Error("데이터를 가져오던 중 에러가 발생했습니다.");
   }
   const result: CategoryResponse<CategoryIDByTab<T>>[] = await response.json();

   const allTabItem = {
      label: "전체",
      value: "ALL" as CategoryIDByTab<T> | "ALL",
   };

   const tabItems: TabItems<CategoryIDByTab<T> | "ALL"> = [
      allTabItem,
      ...result.map((item) => ({
         label: item.name,
         value: item.categoryID,
      })),
   ];

   return <SubTabList tabs={tabItems} />;
}
