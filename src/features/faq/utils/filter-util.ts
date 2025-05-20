import { CATEGORY_MAPS } from "@/features/faq/constants/map";
import { CONSULT_FAQ_ALL } from "@/features/faq/mock/consult/faq.mock";
import { USAGE_FAQ_ALL } from "@/features/faq/mock/usage/faq.mock";
import { FAQTabType, FilterFAQParams } from "@/features/faq/types";
import { paginate } from "@/features/faq/utils/common-util";

export function applyFAQFilter(
   tab: FAQTabType,
   categoryId?: string,
   question?: string
) {
   const map = CATEGORY_MAPS[tab];
   const categoryName =
      categoryId && categoryId in map
         ? map[categoryId as keyof typeof map]
         : null;

   let filtered = tab === "USAGE" ? USAGE_FAQ_ALL : CONSULT_FAQ_ALL;

   if (categoryName) {
      filtered = filtered.filter((faq) =>
         tab === "CONSULT"
            ? faq.subCategoryName === categoryName
            : faq.categoryName === categoryName
      );
   }

   if (question) {
      filtered = filtered.filter(
         (faq) =>
            faq.question.includes(question) || faq.answer.includes(question)
      );
   }

   return filtered;
}

export function filterFAQ({
   tab,
   categoryId,
   question,
   offset = 0,
   limit = 10,
}: FilterFAQParams) {
   const filtered = applyFAQFilter(tab, categoryId, question);
   return paginate(filtered, offset, limit);
}
