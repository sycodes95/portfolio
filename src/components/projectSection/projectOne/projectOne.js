
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";
import Tools from "./tools";
function ProjectOne () {

  

  
  return (
    <div className='PROJECT-CONTAINER 
    bg-black bg-opacity-25 grid '
    >
      
      <div className="DEMO 
        ">
        
      
        <Demo/> 
      </div>
      <div className="DETAIL flex flex-grow z-30">
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