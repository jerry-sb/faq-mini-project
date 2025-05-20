// 페이징 계산 함수
export function paginate<T>(items: T[], offset: number, limit: number) {
   const totalRecord = items.length;
   const paginated = items.slice(offset, offset + limit);
   const prevOffset = Math.max(0, offset - limit);
   const nextOffset = offset + limit < totalRecord ? offset + limit : 0;

   return {
      pageInfo: {
         totalRecord,
         offset,
         limit,
         prevOffset,
         nextOffset,
      },
      items: paginated,
   };
}
