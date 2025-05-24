import { footerAddressItems } from "@/ui/constants/array";

export default function FooterAddress() {
   return (
      <address className="lg:text-right not-italic">
         <div className="lg:justify-end lg:flex-wrap lg:flex">
            {footerAddressItems.map((text, idx) => (
               <span key={idx} className="ml-0 mr-[12px] lg:ml-[12px] lg:mr-0">
                  {text}
                  {idx < footerAddressItems.length - 2 && (
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
