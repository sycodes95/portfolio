import { useState } from "react";
import dummyimage from "../../../images/dummyimage.png"

function Demo () {
  const [imageRef, setImageRef] = useState(null)

  const handleViewSite = () =>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  return (
    <section className=" col-span-2 pt-2 pr-2 pl-2 flex justify-center">
      <div className="relative bg-black bg-opacity-25 flex justify-center items-center overflow-hidden p-4 h-2/4">
        
        
          
        <img className="bg-center grayscale h-full hover:cursor-pointer z-10" src={dummyimage} ref={imageRef}/>
        <div className={`overlay absolute bg-black bg-opacity-50 z-10 w-full h-full
        hover:bg-opacity-0 hover:cursor-pointer
        transition-all`}
        onClick={handleViewSite}
        >
          
        </div>
          
       
        
        
      </div>
    </section>
  )
}

export default Demo;