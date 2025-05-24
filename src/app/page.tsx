import { Suspense } from "react";

import AccordionSearchResult from "@/features/faq/components/accordion/accordion-search-result";
import { AsyncSubTabList } from "@/features/faq/components/async-sub-tab-list";
import SearchInputForm from "@/features/faq/components/search/search-input-form";
import { isFAQTabType } from "@/features/faq/utils/type-utils";
import AppInfo from "@/ui/info/app-info";
import InquiryInfo from "@/ui/info/inquiry-info";
import ProcessInfo from "@/ui/info/process-info";
import LoadingIndicator from "@/ui/loading-indicator";
import ErrorModalBoundary from "@/ui/modal/error-modal-boundary";
import TabList from "@/ui/tab-list";
import { MainTitle, SubTitle } from "@/ui/title";

type SearchParams = Promise<{
   tab?: string;
   category?: string;
   question?: string;
}>;

export default async function FAQ({
   searchParams,
}: {
   searchParams: SearchParams;
}) {
   const { tab: rawTab, category = "ALL", question } = await searchParams;
   const tab = isFAQTabType(rawTab) ? rawTab : "CONSULT";

   return (
      <div className={"mx-auto max-w-[1240px]"}>
         <MainTitle
            title={"자주 묻는 질문"}
            description={"궁금하신 내용을 빠르게 찾아보세요."}
         />
         <ErrorModalBoundary>
            <TabList
               tabs={[
                  { label: "서비스 도입", value: "CONSULT" },
                  { label: "서비스 이용", value: "USAGE" },
               ]}
            />
            <SearchInputForm />
            <Suspense fallback={<LoadingIndicator />}>
               <AsyncSubTabList tab={tab} />
               <AccordionSearchResult
                  tab={tab}
                  category={category}
                  question={question}
               />
            </Suspense>
         </ErrorModalBoundary>
         <SubTitle title={"서비스 문의"} />
         <InquiryInfo />
         <SubTitle title={"이용 프로세스 안내"} />
         <ProcessInfo />
         <AppInfo />
      </div>
   );
}
