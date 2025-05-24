import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams() {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const setQueryParam = (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
   };

   const deleteQueryParam = (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
   };

   return {
      router,
      pathname,
      get: searchParams.get.bind(searchParams),
      has: searchParams.has.bind(searchParams),
      all: () => Object.fromEntries(searchParams.entries()),
      set: setQueryParam,
      delete: deleteQueryParam,
   };
}
