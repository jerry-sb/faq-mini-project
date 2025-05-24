"use client";

import React, { useCallback, useState } from "react";

import { cn } from "@/features/common/utils/tailwind-util";
import SearchInputField from "@/features/faq/components/search/search-input-field";
import useSearchKeyword from "@/features/faq/hooks/use-search-keyword";
import Modal from "@/ui/modal/modal";

export default function SearchInputForm() {
   const { keyword, updateKeyword, setKeyword, submitKeyword } =
      useSearchKeyword();

   const [modalOpen, setModalOpen] = useState(false);

   const handleSubmit = useCallback(
      (e: React.FormEvent) => {
         e.preventDefault();
         if (!submitKeyword()) {
            setModalOpen(true);
         }
      },
      [submitKeyword, setModalOpen]
   );

   return (
      <>
         <form
            id="search-input"
            onSubmit={handleSubmit}
            role="search"
            aria-label="FAQ 검색"
            className={cn(
               "flex justify-center",
               "bg-custom-gray-10 mb-pxMd p-0 md:p-pxMd"
            )}>
            <SearchInputField
               keyword={keyword}
               updateKeyword={updateKeyword}
               setKeyword={setKeyword}
            />
         </form>
         <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            message={"검색어는 2글자 이상 입력해주세요."}
         />
      </>
   );
}
