import { useState } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import edgescoutPNG from "../../../images/edgescout.png"
function Demo () {
  const [imageRef, setImageRef] = useState(null)

  const handleViewSite = () =>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  return (
    <section className="flex justify-center">
      <div className="relative  flex justify-center items-center overflow-hidden p-4 
      border-l-4 border-r-4 border-red-800 border-opacity-40 bg-black">
      
        
        
          
        <img className=" grayscale hover:cursor-pointer z-10" src={edgescoutproject} ref={imageRef}/>
        <div className={`overlay absolute bg-red-900 bg-opacity-10 z-10 w-full h-full
        hover:bg-opacity-0 hover:cursor-pointer
        transition-all bg-cover`}
        onClick={handleViewSite}
        >
       
        </div>
        {
        /*
        <div className="INSIDE-INFO text-white text-opacity-50 absolute left-0 bg-black bg-opacity-25 
        flex justify-center items-center text-center text-4xl bottom-0 z-40 m-4 transition-all">
          <div className="">01</div>
        </div>
        <div className="INSIDE-INFO text-white absolute right-0 bg-black bg-opacity-25 
         flex justify-center items-center text-center text-8xl bottom-0 z-40 m-4 bg-edgescout-black transition-all">
          
        </div>
        */
        }
       
          
       
        
        
      </div>
    </section>
  )
}

export default Demo;