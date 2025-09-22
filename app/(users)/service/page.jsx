import CardServices from "../../../component/cardServices"
const Service = ()=>{
  return (
    <div className="grid grid-cols-4 gap-2 m-4 items-stretch"> 
      <CardServices
        image = "/original-song.png"  
        title = "Original Songs"
        description = "Custom-written and composed songs tailored to your vision, style, and message, ensuring a unique and personal musical creation."
      />  
      <CardServices
        image = "/cover-songs2.png"  
        title = "Cover Songs"
        description = "High-quality renditions of popular tracks, reimagined with fresh vocals, instrumentation, or genre twists while staying true to the original essence."            
      /> 
      <CardServices
        image = "/rap3.png"  
        title = "Rap"
        description = "Custom rap verses or full tracks with sharp lyrics, dynamic flows, and hard-hitting beats, whether for personal projects, commercials, or collaborations."
      />  
      <CardServices
        image = "/BGM-for-Movies4.png"  
        title = "BGM for Movies & Short Films"
        description = "Professionally scored background music designed to intensify suspense, fear, and atmosphere in films, enhancing storytelling through eerie soundscapes and gripping compositions."
      /> 
    </div>   
  );
}

export default Service;