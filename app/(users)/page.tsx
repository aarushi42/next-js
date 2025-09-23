import Image from "next/image"
const Home = () => {
   return (
      <div>
         <div className=" py-12 md:flex items-center justify-evenly w-full h-auto">
            <div className="flex justify-center">
               <Image src="/RB-Melody-Logo.png" alt="RB Melody" width={180} height={180} className="md:w-[259px] md:h-[368px] w-[230px] h-[230px]" ></Image>
            </div>
            <div className="md:ml-10 flex-col text-center">
               <p className="md:text-7xl text-blue-700 font-bold md:mb-3 mt-3 text-2xl">Rizal <span className="text-yellow-400">& </span>Bhuimali </p>
               <p className="md:text-6xl text-yellow-400 font-bold md:text-center md:mb-3 text-xl">Melody Studio</p>
               <p className="md:text-3xl  text-gray-700 font-bold text-lg">Electronic Music Producer & BGM Artist </p>
            </div>
         </div>
         
      </div>
   );
};

export default Home;