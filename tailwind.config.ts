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
      extend: {},
   },
   plugins: [animate],
} satisfies Config;
