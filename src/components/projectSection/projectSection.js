import ProjectOne from "./projectOne/projectOne";


function ProjectSection () {

  return (
    <section className='w-full bg-dev-centered-reversed  border-gray-700 grid '>
        
        <div className=' font-shadow-white text-center flex items-center justify-center row-span-1 m-4'>
          <div className='h-24  text-center text-white text-6xl font-thin transition-all flex items-center'>PROJECTS</div>
        </div>

        <div className="projects">
          <ProjectOne/> 
                   

          <div className='m-12 text-center border border-black border-opacity-25 bg-black bg-opacity-25 text-white font-shadow-white-light rounded-sm col-span-2'>
            
          </div>

        </div>
          
        

      </section>

  )
}

export default ProjectSection;