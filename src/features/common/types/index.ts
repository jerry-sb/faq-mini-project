export type TabItems<T> = { label: string; value: T }[];
export interface PageResponse<T> {
   pageInfo: {
      totalRecord: number;
      offset: number;
      limit: number;
      prevOffset: number;
      nextOffset: number;
   };
   items: T[];
}

export interface AccordionItemBase {
   label: string;
   subLabel: string;
   question: string;
   answer: string;
}
