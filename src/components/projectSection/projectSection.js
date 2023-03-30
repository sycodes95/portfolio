import ProjectOne from "./projectOne/projectOne";

import edgescoutPNG from "../../images/edgescout.png"
import { useEffect, useRef } from "react";
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';
import warmlight from "../../images/warmlight.png"
import spotlight1 from '../../images/spotlight1.png'

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
            
          } 
        });
      }, options);
      
      observer.observe(projectOne.current);
      

    }
    
  }, []);
  /*
  useEffect(() => {

    const options = {
      root: null,
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          projectTwoLeft.current.classList.add('left-0');
          projectTwoLeft.current.classList.remove('-left-1/4');

          
          projectTwoRight.current.classList.add('right-0');
          projectTwoRight.current.classList.remove('-right-1/4');
        } 
      });
    }, options);
    
    observer.observe(projectTwo.current);
    
    // Clean up the observer when the component unmounts
    return () => observer.unobserve(projectTwo.current);

   
    
  }, [projectTwo.current]);
  */
  return (
    <section className='PROJECT-SECTION pb-24 pt-12 gap-y-12'>
      <div className="relative">
        
      </div>
       
      <div className="
      relative
      row-span-1 col-span-2 row-start-1 
      flex justify-center items-center 
      mb-4
      
      rounded-sm h-12">
        
        
        
        <div className="ICON-CONTAINER bg-red-800 bg-opacity-25 h-full w-full flex items-center
         border-2 border-red-800 border-opacity-30">
          <img className="absolute WARMLIGHT-PROJECTS" src={warmlight} alt=""/>
          <div className="flex justify-start ml-2 w-fit z-10">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md" path={mdiHammerWrench} size={1.5} />
            
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-white text-opacity-60 res-font">
            <span>P R O J E C T S</span>
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md flip" path={mdiHammerWrench} size={1.5} />
          </div>
          
          
        </div>
        
        
      </div>
        
      <section className=' grid gap-x-8 shadow-md overflow-hidden' ref={projectOne}>
        
        <div className="flex justify-center  ">

          <div className="SIDE-INFO  text-red-800 font-black-outline-light absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-500  right-corner-clip
          border-l-8 border-red-800 border-opacity-30 p-2" ref={projectOneLeft}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-l-2 border-red-800 border-opacity-30 border-dashed">01</div>
            
          </div>

          <div className="SIDE-INFO  text-white absolute -right-1/4  bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-500
          border-r-8 border-red-800 border-opacity-30 p-2" ref={projectOneRight}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-r-2 border-red-800 border-opacity-30 border-dashed">
              <img src={edgescoutPNG} alt=""/>
            </div>
            
          </div>

          <ProjectOne/> 
        </div>

      </section>
      {
        /*
        <section className=' grid gap-x-8 shadow-md mt-24' ref={projectTwo}>
        
          <div className="SIDE-INFO border-2 border-black text-white absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-500 bg-striped-3 right-corner-clip" ref={projectTwoLeft}>
            <div className="">02</div>
          </div>

          <div className="SIDE-INFO border-2 border-black text-white absolute -right-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl bg-striped-3 transition-all duration-500" ref={projectTwoRight}>
            <img src={edgescoutPNG}/>
          </div>
          <div className="flex justify-center h-auto ">
            <ProjectOne/> 
          </div>
        </section>
        */
      }

      
      

        

    </section>

  )
}

export default ProjectSection;