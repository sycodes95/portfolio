import { useState } from "react";
import dummyimage from "../../../images/dummyimage.png"
import edgescoutPNG from "../../../images/edgescout.png"
function Demo () {
  const [imageRef, setImageRef] = useState(null)

  const handleViewSite = () =>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  return (
    <section className=" col-span-2 mt-2 ml-2 mr-2 flex justify-center">
      <div className="relative bg-black bg-opacity-25 flex justify-center items-center overflow-hidden p-4 h">
        
        
          
        <img className="PROJECT-IMAGE grayscale hover:cursor-pointer z-10" src={dummyimage} ref={imageRef}/>
        <div className={`overlay absolute bg-black bg-opacity-50 z-10 w-full h-full
        hover:bg-opacity-0 hover:cursor-pointer
        transition-all`}
        onClick={handleViewSite}
        >
          
        </div>
        <div className="INSIDE-INFO text-white text-opacity-50 absolute left-0 bg-black bg-opacity-25 
         flex justify-center items-center text-center text-4xl bottom-0 z-40 m-4 transition-all">
          <div className="">01</div>
        </div>
        <div className="INSIDE-INFO text-white absolute right-0 bg-black bg-opacity-25 
         flex justify-center items-center text-center text-8xl bottom-0 z-40 m-4 bg-edgescout-black transition-all">
          
        </div>
          
       
        
        
      </div>
    </section>
  )
}

export default Demo;