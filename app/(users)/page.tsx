import Image from "next/image"
const Home = () => {
   return (
      <div>
         <div className=" py-16 md:pl-20 md:flex items-center justify-start w-full h-auto">
            <div className="flex justify-center md:-ml-6">
               <Image src="/studio-image.jpg" alt="RB Melody" width={180} height={180} className="md:w-[320px] md:h-[408px] w-[230px] h-[230px]" ></Image>
            </div>
            <div className="md:flex-1 md:ml-20 flex-col text-center">
               <p className="md:text-7xl text-blue-700 font-bold md:mb-3 mt-3 text-2xl">Rizal <span className="text-yellow-400">& </span>Bhuimali </p>
               <p className="md:text-6xl text-yellow-400 font-bold md:text-center md:mb-3 text-xl">Melody Studio</p>
               <p className="md:text-3xl  text-gray-700 font-bold text-lg">Electronic Music Producer & BGM Artist </p>
            </div>
         </div>
         <div>
            <h1 className="text-center text-6xl font-bold text-blue-700 ">About Us</h1>
            <div className="md:flex justify-evenly mt-12">
               <div>
                  <div className="relative flex justify-center md:justify-start md:-ml-9">
                     <Image 
                     src="/team-image1.png" 
                     height={300} width={300} alt="Melody-Studio"
                     className="md:h-[300px] md:w-[360px]"
                     ></Image>
                     <Image 
                     src="/team-image2.webp" 
                     height={180} width={180} alt="Melody-Studio"
                     className=" hidden md:block absolute -bottom-10 -right-18 md:h-[130px] md:w-[180px]"
                     ></Image>
                  </div>
               </div>
               <div className="w-130 md:ml-22">
                  <p className="font-bold text-4xl text-white ">Producing Dreams,</p>
                  <p className="font-bold text-4xl text-white ">One Track at a Time</p> 
                  <p className="text-gray-500 text-xl mt-4">With more than eight years of experience in electronic music composition, Rizal & Bhuimali Melody Studio creates unique soundscapes that blend modern electronic textures with poignant melodies. With expertise in interactive audio for visual media, I provide customized compositions that enhance narrative in film, advertising, and multimedia applications.</p>
                  <p className="mt-4 text-indigo-800 font-bold text-xl ">Learn more </p>
               </div>
            </div>
         </div>
         <div className="my-15">
            <h1 className="text-center text-5xl font-bold text-blue-700 ">Our Services</h1>
            <div> main card container
               <div> card
                  <div>icon</div>
                  <div>guinb</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;