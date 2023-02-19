
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";

function ProjectOne () {

  

  
  return (
    <div className='PROJECT-CONTAINER 
    bg-black bg-opacity-25 '
    >

      <section className='TITLE
      bg-black bg-opacity-50  rounded-sm bottom-left-round  bottom-right-round
      font-black-outline-light 
      text-center text-white
      col-span-2'>

        <span>PROJECT "EDGE SCOUT"</span>

      </section>
      <section className="PROJECT-CONTENT 
      grid "
      >

        <div className="DEMO ">
          <Demo/> 
        </div>
        <div className="DETAIL flex flex-grow">
          <Detail/>
        </div>
        <div className="FEATURE flex flex-grow">
          <Feature/>
        </div>
        
        
        

      </section>
      
      
    </div>

  )
}

export default ProjectOne;