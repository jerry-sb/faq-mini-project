import { describe, expect, it } from "vitest";

import { paginate } from "@/features/faq/utils/common-util";

const mockItems = Array.from({ length: 25 }, (_, i) => ({ id: i + 1 }));

describe("paginate", () => {
   it("limit 개수만큼 데이터를 반환해야 한다", () => {
      const result = paginate(mockItems, 0, 10);
      expect(result.items.length).toBe(10);
   });

   it("offset이 적용된 데이터를 반환해야 한다", () => {
      const result = paginate(mockItems, 10, 5);
      expect(result.items[0].id).toBe(11);
   });

   it("prevOffset이 올바르게 계산된다", () => {
      const result = paginate(mockItems, 10, 5);
      expect(result.pageInfo.prevOffset).toBe(5);
   });

   it("nextOffset이 남은 데이터가 없으면 0이 된다", () => {
      const result = paginate(mockItems, 20, 10);
      expect(result.pageInfo.nextOffset).toBe(0);
   });
});
