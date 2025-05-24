import React from "react";

import { cn } from "@/features/faq/utils/tailwind-util";

interface BgAutoImageProps extends React.HTMLAttributes<HTMLDivElement> {
   url?: string;
}

const BgAutoImage = React.forwardRef<HTMLDivElement, BgAutoImageProps>(
   ({ className, url, style, ...props }, ref) => {
      const mergedStyle = {
         ...style,
         backgroundImage: url ? `url('${url}')` : undefined,
      };

      return (
         <div
            ref={ref}
            className={cn("bg-no-repeat bg-[auto_100%]", className)}
            style={mergedStyle}
            {...props}
         />
      );
   }
);
BgAutoImage.displayName = "BgAutoImage";

export default BgAutoImage;
