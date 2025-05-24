"use client";

import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Modal from "@/ui/modal/modal";

export default function ErrorModalBoundary({
   children,
}: {
   children: ReactNode;
}) {
   return (
      <ErrorBoundary
         fallbackRender={({ error, resetErrorBoundary }) => (
            <Modal
               open={true}
               onClose={resetErrorBoundary}
               message={error.message}
            />
         )}>
         {children}
      </ErrorBoundary>
   );
}
