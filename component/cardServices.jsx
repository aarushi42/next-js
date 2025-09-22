
import Image from "next/image"
export default function CardServices({image, title, description}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-auto pb-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-2xl transform hover:-translate-2 transition-all">
        <div className="w-full h-40 relative p-0">
          <Image src={image} alt={title} fill className="object-cover" ></Image>
        </div>
        <div className="flex flex-col flex-1 justify-start items-start px-2">
          <p className="font-bold text-lg text-orange-500 mb-1 ">{title}</p>
          <p className="text-black leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
}