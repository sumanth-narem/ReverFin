'use client';

// import { useRouter } from 'next/navigation';
import ImageComponent from '../ui/Image';
import { SubItems } from '@/types/types';

const SubItemCard = (subItem: SubItems) => {

  return (
    <div
      onClick={subItem?.click}
      className="w-1/4 h-full flex items-start group/card justify-start flex-col cursor-pointer"
    >
      {
        subItem?.img &&
        <>
          <div className="flex items-start justify-start px-5 flex-col">
            <div className="relative h-40 w-48 flex items-start justify-start overflow-hidden">
              <ImageComponent
                fill
                loading="lazy"
                alt={subItem?.title}
                src={subItem?.img ?? ""}
                className="absolute h-full w-full transition-all opacity-100 group-hover/card:opacity-0 duration-500"
              />
              <ImageComponent
                fill
                loading="lazy"
                alt={subItem?.title}
                src={subItem?.hoverImg ?? ""}
                className="absolute h-full w-full transition-all opacity-0 group-hover/card:opacity-100 duration-500"
              />
            </div>
          </div>

          <div className="w-full h-1.5 border-y border-primary-500 border-dashed" />
        </>
      }

      <div className={`px-5 ${subItem?.img ? "pt-5" : " pt-10"} flex items-start justify-start gap-3 flex-col`}>
        <p className={`font-alliance ${subItem?.img ? "text-xl" : "text-sm"} text-primary-400 group-hover/card:text-white transition-all duration-500`}>
          {subItem?.title}
        </p>
        <p className={`font-ppMori ${subItem?.img ? "text-sm" : "text-xl"} text-primary-400 group-hover/card:text-white transition-all duration-500`}>
          {subItem?.content}
        </p>
      </div>
    </div>
  );
};

export default SubItemCard;
