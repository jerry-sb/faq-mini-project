interface MainTitleProps {
   title: string;
   description: string;
}

function MainTitle({ title, description }: MainTitleProps) {
   return (
      <div className="flex items-start justify-center flex-col h-h1 text-h1 text-center">
         <h1 className="font-bold">{title}</h1>
         <em className={"text-h1sm mt-[0.3em] leading-sm"}>{description}</em>
      </div>
   );
}

interface SubTitleProps {
   title: string;
}

function SubTitle({ title }: SubTitleProps) {
   return <h2 className="text-heading2 m-heading2 font-bold">{title}</h2>;
}

export { MainTitle, SubTitle };
