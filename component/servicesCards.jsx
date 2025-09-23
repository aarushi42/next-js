export default function Card({title, description, icon: Icon}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center"> 
        <div className="text-7xl text-gray-300">
            {Icon && <Icon />}
        </div>
        <div>
          <p className="text-md text-gray-400 font-bold text-center">{title}</p>
          <p className="text-sm text-gray-500 w-78 text-center">{description}</p>
        </div>
      </div>  
    </>
  );
}


