
import { useRef } from "react";
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";
import Tools from "./tools";
function ProjectOne () {
  const detailRef = useRef(null)
  const featureRef = useRef(null)
  

  
  return (
    <div className='PROJECT-CONTAINER 
    bg-black bg-opacity-25 grid relative overflow-hidden'
    >
      <div className="DEMO 
        ">
        <Demo/> 
      </div>
      <div className="DETAIL flex flex-grow z-30 -left-1/2">
        <Detail/>
      </div>
      <div className="FEATURE flex flex-grow z-30">
        <Feature/>
      </div>
      {
        /*
        <div className="TOOLS 
          ">
          <Tools/> 
        </div>
        */
      }
    </div>

  )
}

export default ProjectOne;