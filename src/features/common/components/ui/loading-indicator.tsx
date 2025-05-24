export default function LoadingIndicator() {
   return (
      <div className="flex flex-1 min-h-[320px] items-center justify-center text-[0]">
         <i
            className="
          relative rounded-full animate-indicator
          w-8 h-8
          sm:w-10 sm:h-10
          md:w-12 md:h-12
        ">
            <span
               className="
            absolute inset-0 rounded-full
            border-solid border-gray-200 animate-indicator-clipping
            border-[4px]
            sm:border-[5px]
            md:border-[6px]
          "
            />
         </i>
      </div>
   );
}
