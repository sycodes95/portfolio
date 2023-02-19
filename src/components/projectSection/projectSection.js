import ProjectOne from "./projectOne/projectOne";
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"

function ProjectSection () {

  return (
    <section className='PROJECT-SECTION pb-96 pt-12 gap-y-12'>
      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-8 
       
       rounded-sm h-16">
        <div className="ICON-CONTAINER bg-black bg-opacity-25 h-full w-full flex justify-center items-center">
          <ReactSVG className="h-12 w-12 text-red-700 text-opacity-50 bg-black bg-opacity-25 rounded-md " src={triangledots}/>
        </div>
        
      </div>
        
      <section className='PROJECTS grid '>
        <div className="PRO-ONE-DIV flex justify-center h-auto ">
          <ProjectOne/> 
        </div>

        <div className="PRO-ONE-DIV flex justify-center h-auto">
          <ProjectOne/> 
        </div>
      </section>
      

        

    </section>

  )
}

export default ProjectSection;