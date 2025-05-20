import { describe, expect, it } from "vitest";

import { CATEGORY_MAPS } from "@/features/faq/constants/map";
import { filterFAQ } from "@/features/faq/utils/filter-util";

describe("filterFAQ", () => {
   it("탭만 입력하면 해당 탭의 전체 데이터를 반환한다", () => {
      const result = filterFAQ({ tab: "CONSULT" });
      expect(result.items.length).toBeGreaterThan(0);
      expect(result.pageInfo.totalRecord).toBeGreaterThan(0);
   });

   it("categoryId로 필터링하면 해당 카테고리만 반환된다", () => {
      const result = filterFAQ({ tab: "CONSULT", categoryId: "PRODUCT" });
      expect(
         result.items.every(
            (item) => item.subCategoryName === CATEGORY_MAPS.CONSULT.PRODUCT
         )
      ).toBe(true);
   });

   it("question으로 검색 시 질문이나 답변에 해당 문자열이 포함되어야 한다", () => {
      const result = filterFAQ({ tab: "USAGE", question: "면허" });
      expect(result.items.length).toBeGreaterThan(0);
      expect(
         result.items.every(
            (item) =>
               item.question.includes("면허") || item.answer.includes("면허")
         )
      ).toBe(true);
   });

   it("offset과 limit에 따라 페이징이 정확히 작동한다", () => {
      const result = filterFAQ({ tab: "USAGE", offset: 0, limit: 5 });
      expect(result.items.length).toBeLessThanOrEqual(5);
      expect(result.pageInfo.offset).toBe(0);
      expect(result.pageInfo.limit).toBe(5);
   });
});
