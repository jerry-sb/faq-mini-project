import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
   content: [
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
   ],
   prefix: "",
   theme: {
      extend: {
         top: {
            header: "var(--header-height)",
         },
         inset: {
            header: "var(--header-height)",
         },
         fontSize: {
            base: "var(--font-size)",
            tab: "var(--tab-fsize)",
            heading2: "var(--heading-2)",
            heading4: "var(--heading-4)",
            headingInfo: "var(--heading-info)",
            h1: "var(--h1-fsize)",
            h1sm: "var(--h1-fsize-sm)",
            faq: "var(--faq-list-a-size)",
         },
         boxShadow: {
            header: "0 4px 32px 0 rgba(0, 0, 0, 0.08)",
         },
         spacing: {
            xsm: "var(--space-xsm)",
            xsm2: "var(--space-xsm2)",
            sm: "var(--space-sm)",
            sm2: "var(--space-sm2)",
            md: "var(--space-md)",
            md2: "var(--space-md2)",
            md3: "var(--space-md3)",
            box: "var(--space-box)",
            box2: "var(--space-box2)",
            side: "var(--side-padding)",
            bottom: "var(--bottom-padding)",
            gallery: "var(--gallery-list-space)",
            faqQ: "var(--faq-list-q-padding)", // e.g. py-faqQ
         },
         height: {
            btnMd: "var(--btn-md)",
            btnXlg: "var(--btn-xlg)",
            btnXlg2: "var(--btn-xlg2)",
            btnXxlg: "var(--btn-xxlg)",
            header: "var(--header-height)",
            footer: "var(--footer-height)",
            h1: "var(--h1-height)",
         },
         width: {
            searchBar: "var(--search-bar-width)",
         },
         maxWidth: {
            boardMedia: "var(--board-media-max-width)",
            "max-width": "var(--max-width)",
         },
         fontFamily: {
            kia: ["var(--font-kia)", "Arial", "Helvetica", "sans-serif"],
         },
         lineHeight: {
            header: "var(--header-height)",
         },
         keyframes: {
            "slide-in-left": {
               from: {
                  transform: "translateX(-100%)",
               },
               to: {
                  transform: "translateX(0)",
               },
            },
            "slide-out-left": {
               from: {
                  transform: "translateX(0)",
               },
               to: {
                  transform: "translateX(-100%)",
               },
            },
         },
         animation: {
            "slide-in-left":
               "slide-in-left 0.7s cubic-bezier(1, 0, 0.2, 1) forwards",
            "slide-out-left":
               "slide-out-left 0.7s cubic-bezier(1, 0, 0.2, 1) forwards",
         },
      },
   },
   plugins: [animate],
} satisfies Config;
