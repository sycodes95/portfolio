import ProjectOne from "./projectOne/projectOne";
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import edgescoutPNG from "../../images/edgescout.png"
import { useEffect, useRef } from "react";


function ProjectSection () {
  const projectOne = useRef(null)
  const projectOneLeft = useRef(null);
  const projectOneRight = useRef(null);

  

  useEffect(() => {
    if(projectOneLeft && projectOneRight) {
      

      const options = {
        root: null,
        threshold: 0.1,
      };
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            projectOneLeft.current.classList.add('left-0');
            projectOneLeft.current.classList.remove('-left-1/4');

            projectOneRight.current.classList.add('right-0');
            projectOneRight.current.classList.remove('-right-1/4');
          } else {
            projectOneLeft.current.classList.add('-left-1/4');
            projectOneLeft.current.classList.remove('left-0');

            projectOneRight.current.classList.add('-right-1/4');
            projectOneRight.current.classList.remove('right-0');
          }
        });
      }, options);
      
      observer.observe(projectOne.current);
      
      // Clean up the observer when the component unmounts
      return () => observer.unobserve(projectOne.current);

    }
    
  }, [projectOne.current]);

  return (
    <section className='PROJECT-SECTION pb-96 pt-12 gap-y-12'>

      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4
       
       rounded-sm h-12">
        
        <div className="ICON-CONTAINER bg-black bg-opacity-25 h-full w-full flex items-center">
          <div className="flex justify-start ml-2 w-fit">
            <ReactSVG className="h-8 w-8 text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md " src={triangledots}/>
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-red-700 text-opacity-70 text-xl">
            <span>P R O J E C T S</span>
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <ReactSVG className="h-8 w-8 text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md " src={triangledots}/>
          </div>
          
          
        </div>
        
        
      </div>
        
      <section className=' grid gap-x-8 shadow-md' ref={projectOne}>

        <div className="SIDE-INFO text-white absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
         flex justify-center items-center text-center text-8xl transition-all duration-500" ref={projectOneLeft}>
          <div className="">01</div>
        </div>

        <div className="SIDE-INFO text-white absolute -right-1/4 bg-black bg-opacity-25 w-48 h-48
         flex justify-center items-center text-center text-8xl bg-edgescout transition-all duration-500" ref={projectOneRight}>

        </div>


        <div className="flex justify-center h-auto ">
          <ProjectOne/> 
        </div>

      </section>

      <section className=' grid gap-x-8 shadow-md mt-24'>
        <div className="SIDE-INFO text-white absolute left-0 bg-black bg-opacity-25 w-48 h-48
         flex justify-center items-center text-center text-8xl">
          <div className="">02</div>
        </div>
        <div className="SIDE-INFO text-white absolute right-0 bg-black bg-opacity-25 w-48 h-48
         flex justify-center items-center text-center text-8xl bg-edgescout">
          
        </div>
        <div className="flex justify-center h-auto ">
          <ProjectOne/> 
        </div>
      </section>
      

        

    </section>

  )
}

export default ProjectSection;