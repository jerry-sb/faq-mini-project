"use client";

import { cn } from "@/features/common/utils/tailwind-util";
import SearchClearButton from "@/features/faq/components/search/seach-clear-button";
import SearchButton from "@/features/faq/components/search/search-button";

interface SearchInputFieldProps {
   keyword: string;
   updateKeyword: (value: string) => void;
   setKeyword: (value: string) => void;
}

export default function SearchInputField({
   keyword,
   updateKeyword,
   setKeyword,
}: SearchInputFieldProps) {
   return (
      <div className="relative w-searchBar">
         <label htmlFor="faq-search-input" className="sr-only">
            자주 묻는 질문 검색
         </label>

         <input
            id="faq-search-input"
            type="text"
            value={keyword}
            onChange={(e) => updateKeyword(e.target.value)}
            placeholder="찾으시는 내용을 입력해 주세요"
            aria-label="FAQ 검색어 입력"
            className={cn(
               "w-full border border-midnight-900",
               "h-btnXlg2 pl-[16px] pr-search-bar",
               "text-base"
            )}
         />

         {keyword && <SearchClearButton onClick={() => setKeyword("")} />}
         <SearchButton />
      </div>
   );
}
