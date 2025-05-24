import "./globals.css";

import localFont from "next/font/local";

import Footer from "@/features/common/components/layout/footer";
import Header from "@/features/common/components/layout/header";
import QueryProvider from "@/lib/query-provider";
import ScrollToTopButton from "@/ui/button/scroll-top-button";

const kiaFont = localFont({
   src: [
      {
         path: "./fonts/KiaSignatureFixRegular.woff2",
         weight: "400",
      },
      {
         path: "./fonts/KiaSignatureFixBold.woff2",
         weight: "700",
      },
   ],
   variable: "--font-kia",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${kiaFont.variable} font-kia`}>
            <Header />
            <QueryProvider>
               <main className="relative min-h-screen px-side pb-bottom">
                  {children}
               </main>
            </QueryProvider>
            <div className={"relative"}>
               <ScrollToTopButton />
            </div>
            <Footer />
         </body>
      </html>
   );
}
