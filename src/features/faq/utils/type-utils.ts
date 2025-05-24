import { FAQTabType } from "@/features/faq/types";

export function isFAQTabType(value: unknown): value is FAQTabType {
   return (
      typeof value === "string" &&
      ["CONSULT", "USAGE"].includes(value as FAQTabType)
   );
}
