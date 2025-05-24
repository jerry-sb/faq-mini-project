import Link from "next/link";

export default function HeaderLogo() {
   return (
      <Link href="/" className="block h-full" aria-label="Kia BIZ">
         <picture>
            <source srcSet="/svg/logo_kiabiz.svg" media="(min-width: 1024px)" />
            <img
               src="/svg/logo_kiabiz_sm.svg"
               alt="Kia BIZ"
               className="w-[110px] lg:w-[140px] h-full object-contain"
            />
         </picture>
      </Link>
   );
}
