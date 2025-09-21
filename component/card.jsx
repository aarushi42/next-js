import Image from "next/image"


const cardData=[{
  src: "/music_cover.jpeg",
  alt: "Music Logo",
  title: "Original Songs",
  description: "Custom-written and composed songs tailored to your vision, style, and message, ensuring a unique and personal musical creation."
},{
  src: "/music_cover.jpeg",
  alt: "Music Logo",
  title: "Original Songs",
  description: "Custom-written and composed songs tailored to your vision, style, and message, ensuring a unique and personal musical creation."
},{
  src: "/music_cover.jpeg",
  alt: "Music Logo",
  title: "Original Songs",
  description: "Custom-written and composed songs tailored to your vision, style, and message, ensuring a unique and personal musical creation."
}];

export default function CardList (){
  return (   
      <div className="flex gap-4 flex-wrap ">
        {cardData.map((card, index) =>(
        <div
        key={index}
        className="flex flex-col px-2 p-4 shadow-md shadow-black w-60 ml-2 mt-4 justify-center items-center">
            <Image src={card.src} alt={card.alt} width={150} height={80}></Image>
            <p className="font-bold mt-2 text-red-500">{card.title}</p>
            <p className="font-bold mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    
  );  
}