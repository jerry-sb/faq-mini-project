import { ConsultCategoryID } from "@/features/faq/types";

const CONSULT_CATEGORY: {
   categoryID: ConsultCategoryID;
   name: string;
}[] = [
   {
      categoryID: "PRODUCT",
      name: "서비스 상품",
   },
   {
      categoryID: "COUNSELING",
      name: "도입 상담",
   },
   {
      categoryID: "CONTRACT",
      name: "계약",
   },
];

export default CONSULT_CATEGORY;
