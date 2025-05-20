import "./globals.css";

import localFont from "next/font/local";

import Header from "@/components/layout/header";

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
            <div>
               <Header />
            </div>
            <main>{children}</main>
         </body>
      </html>
   );
}
