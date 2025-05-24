const footerItems = [
   "서울특별시 서초구 헌릉로 12 기아(주)",
   "대표: 송호성, 최준영",
   "사업자등록번호: 119-81-02316",
   "통신판매번호: 2006-07935",
   "고객센터: 1833-4964",
   "제휴문의: kiabiz@kia.com",
];

export default function FooterAddress() {
   return (
      <address className="lg:text-right not-italic">
         <div className="lg:justify-end lg:flex-wrap lg:flex">
            {footerItems.map((text, idx) => (
               <span key={idx} className="ml-0 mr-[12px] lg:ml-[12px] lg:mr-0">
                  {text}
                  {idx < footerItems.length - 2 && (
                     <br
                        className={
                           idx % 2 === 0 ? "lg:hidden md:hidden" : "lg:hidden"
                        }
                     />
                  )}
               </span>
            ))}
         </div>
      </address>
   );
}
