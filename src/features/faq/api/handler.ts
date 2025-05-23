import "server-only";

import { NextRequest, NextResponse } from "next/server";

import { FAQTabType } from "@/features/faq/types";
import { filterFAQ } from "@/features/faq/utils/filter-util";

export const GET = async (req: NextRequest) => {
   const searchParams = req.nextUrl.searchParams;

   const tab = searchParams.get("tab") as FAQTabType;
   const categoryId = searchParams.get("faqCategoryID") || undefined;
   const question = searchParams.get("question") || undefined;
   const offset = Number(searchParams.get("offset") || 0);
   const limit = Number(searchParams.get("limit") || 10);

   const result = filterFAQ({ tab, categoryId, question, offset, limit });

   return NextResponse.json(result);
};
