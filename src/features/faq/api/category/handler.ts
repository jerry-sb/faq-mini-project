import "server-only";

import { NextRequest, NextResponse } from "next/server";

import CONSULT_CATEGORY from "@/features/faq/mock/consult/category.mock";
import USAGE_CATEGORY from "@/features/faq/mock/usage/category.mock";
import { isFAQTabType } from "@/features/faq/utils/type-utils";

export const GET = async (req: NextRequest) => {
   const searchParams = req.nextUrl.searchParams;
   const tab = searchParams.get("tab");

   if (!isFAQTabType(tab)) {
      return NextResponse.json({ error: "Invalid tab value" }, { status: 400 });
   }
   const result = tab === "CONSULT" ? CONSULT_CATEGORY : USAGE_CATEGORY;
   return NextResponse.json(result);
};
