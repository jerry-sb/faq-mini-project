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
         colors: {
            mint: {
               900: "var(--mint-900)",
               700: "var(--mint-700)",
            },
            midnight: {
               900: "var(--midnight-900)",
               100: "var(--midnight-100)",
            },
            "custom-red": "var(--red)",
            "custom-blue": "var(--blue)",
            "custom-black": {
               300: "var(--black-300)",
            },
            "custom-gray": {
               700: "var(--gray-700)",
               500: "var(--gray-500)",
               400: "var(--gray-400)",
               300: "var(--gray-300)",
               200: "var(--gray-200)",
               100: "var(--gray-100)",
               50: "var(--gray-50)",
               10: "var(--gray-10)",
            },
         },
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
            "custom-md": "var(--font-md)",
            "custom-lg": "var(--font-lg)",
            "input-md": "var(--input-md)",
         },
         margin: {
            heading2: "var(--heading-2-margin)",
         },
         boxShadow: {
            header: "0 4px 32px 0 rgba(0, 0, 0, 0.08)",
         },
         spacing: {
            xsm: "var(--space-xsm)",
            xsm2: "var(--space-xsm2)",
            sm: "var(--space-sm)",
            pxLg: "var(--px-lg)",
            pxMd: "var(--px-md)",
            sm2: "var(--space-sm2)",
            md: "var(--space-md)",
            md2: "var(--space-md2)",
            md3: "var(--space-md3)",
            box: "var(--space-box)",
            box2: "var(--space-box2)",
            side: "var(--side-padding)",
            bottom: "var(--bottom-padding)",
            gallery: "var(--gallery-list-space)",
            faqQ: "var(--faq-list-q-padding)",
            faqQV: "var(--faq-list-q-padding-v)",
            "search-bar":
               "calc(var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px)",
         },
         height: {
            btnMd: "var(--btn-md)",
            btnXlg: "var(--btn-xlg)",
            btnXlg2: "var(--btn-xlg2)",
            btnXxlg: "var(--btn-xxlg)",
            header: "var(--header-height)",
            footer: "var(--footer-height)",
            h1: "var(--h1-height)",
            "ic-xlg": "var(--ic-xlg)",
            "ic-lg": "var(--ic-lg)",
            "ic-sm": "var(--ic-sm)",
         },
         minHeight: {
            main: "calc(100vh - var(--header-height) - var(--footer-height))",
            btnXlg: "var(--btn-xlg)",
            btnXlg2: "var(--btn-xlg2)",
            btnXxlg: "var(--btn-xxlg)",
         },
         width: {
            "ic-xlg": "var(--ic-xlg)",
            "ic-lg": "var(--ic-lg)",
            "ic-sm": "var(--ic-sm)",
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
            footer: "var(--line-height-footer)",
            xs: "var(--line-height-xs)",
            sm: "var(--line-height-md)",
            md: "var(--line-height-md)",
            lg: "var(--line-height-lg)",
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
            indicator: {
               to: { transform: "rotate(360deg)" },
            },
            "indicator-clipping": {
               "0%": {
                  clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)",
               },
               "25%": {
                  clipPath:
                     "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
               },
               "50%": {
                  clipPath:
                     "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
               },
               "75%": {
                  clipPath:
                     "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
               },
               "100%": {
                  clipPath:
                     "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
               },
            },
         },
         animation: {
            "slide-in-left":
               "slide-in-left 0.7s cubic-bezier(1, 0, 0.2, 1) forwards",
            "slide-out-left":
               "slide-out-left 0.7s cubic-bezier(1, 0, 0.2, 1) forwards",
            indicator: "indicator 0.8s linear infinite",
            "indicator-clipping":
               "indicator-clipping 1.6s linear infinite alternate",
            "fade-slide": "fade-slide 0.3s ease-out",
         },
      },
   },
   plugins: [animate],
} satisfies Config;
