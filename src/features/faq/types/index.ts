export type ConsultCategoryID = "PRODUCT" | "COUNSELING" | "CONTRACT";
export type UsageCategoryID =
   | "SIGN_UP"
   | "BUSINESS"
   | "ACCIDENT"
   | "RESERVATION"
   | "VEHICLE"
   | "REFUEL"
   | "COUPON";

export interface FaqItem {
   id: number;
   categoryName: string;
   subCategoryName: string;
   question: string;
   answer: string;
}

export type FAQTabType = "CONSULT" | "USAGE";

export type CategoryMaps = {
   CONSULT: Record<ConsultCategoryID, string>;
   USAGE: Record<UsageCategoryID, string>;
};

export interface FilterFAQParams {
   tab: FAQTabType;
   categoryId?: string;
   question?: string;
   offset?: number;
   limit?: number;
}
