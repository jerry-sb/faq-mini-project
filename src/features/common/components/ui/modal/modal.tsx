"use client";

import { useEffect, useState } from "react";

import { cn } from "@/features/common/utils/tailwind-util";

interface ModalProps {
   open: boolean;
   onClose: () => void;
   message: string;
}

export default function Modal({ open, onClose, message }: ModalProps) {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      if (open) {
         const timeout = setTimeout(() => setVisible(true), 10);
         return () => clearTimeout(timeout);
      } else {
         setVisible(false);
      }
   }, [open]);

   if (!open) return null;

   return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
         <div
            className={cn(
               "bg-white p-6 rounded-md shadow-md w-full max-w-sm text-center transition-all duration-500",
               visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
            )}>
            <div className="mb-4 text-base">{message}</div>
            <button
               className={cn(
                  "mt-2 h-[48px] lg:h-[52px] min-w-[7.5em] font-semibold hover:bg-custom-gray-10 px-10",
                  "border border-solid border-midnight-900 "
               )}
               onClick={onClose}>
               확인
            </button>
         </div>
      </div>
   );
}
