import ProjectOne from "./projectOne/projectOne";

import edgescoutPNG from "../../images/edgescout.png"
import { useEffect, useRef } from "react";
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';
import warmlight from "../../images/warmlight.png"
import spotlight1 from '../../images/spotlight1.png'

function ProjectSection () {
  const projectOne = useRef(null)

  const projectOneDetails = useRef(null)

  const projectOneLeft = useRef(null);
  const projectOneRight = useRef(null);

  const projectsTitleP = useRef(null)
  const projectsTitleR = useRef(null)
  const projectsTitleO = useRef(null)
  const projectsTitleJ = useRef(null)
  const projectsTitleE = useRef(null)
  const projectsTitleC = useRef(null)
  const projectsTitleT = useRef(null)
  const projectsTitleS = useRef(null)
  
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

            projectOneDetails.current.classList.add('opacity-100');
            projectOneDetails.current.classList.remove('opacity-0');

            const projectLettersArray = [
              projectsTitleP,
              projectsTitleR,
              projectsTitleO,
              projectsTitleJ,
              projectsTitleE,
              projectsTitleC,
              projectsTitleT,
              projectsTitleS
            ]

            projectLettersArray.forEach(letter => {
              letter.current.classList.add('opacity-100');
              letter.current.classList.remove('opacity-0');
            })
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
    <section className='PROJECT-SECTION pb-12 pt-12 gap-y-12  bg-hammer'>
     
       
      <section className="
      relative
      row-span-1 col-span-2 row-start-1 
      flex justify-center items-center  
      mb-4
      
      rounded-sm h-10">
        <div className="ICON-CONTAINER bg-red-800 bg-opacity-25 h-full w-full flex items-center relative
         ">
          
          <div className="flex justify-start ml-2 w-fit z-10">
            <Icon className=" text-black" path={mdiHammerWrench} size={1.5} />
            
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-white text-opacity-60
          whitespace-nowrap res-font gap-x-12 max-width-768px-gap-x-none">
            <p className="opacity-0 transition-opacity delay-200 duration-75" ref={projectsTitleP}>P</p>
            <p className="opacity-0 transition-opacity delay-200 duration-100" ref={projectsTitleR}>R</p>
            <p className="opacity-0 transition-opacity delay-200 duration-150" ref={projectsTitleO}>O</p>
            <p className="opacity-0 transition-opacity delay-200 duration-200" ref={projectsTitleJ}>J</p>
            <p className="opacity-0 transition-opacity delay-200 duration-300" ref={projectsTitleE}>E</p>
            <p className="opacity-0 transition-opacity delay-200 duration-500" ref={projectsTitleC}>C</p>
            <p className="opacity-0 transition-opacity delay-200 duration-700" ref={projectsTitleT}>T</p>
            <p className="opacity-0 transition-opacity delay-200 duration-1000" ref={projectsTitleS}>S</p>

            
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-black flip" path={mdiHammerWrench} size={1.5} />
          </div>
          
          
        </div>
        
        
      </section>
        
      <section className=' grid gap-x-8 overflow-hidden mt-16' ref={projectOne}>
        
        <div className="flex justify-center">

          <div className="SIDE-INFO  text-red-800 font-black-outline-light absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700  right-corner-clip
          border-l-8 border-red-800 border-opacity-30 p-2" ref={projectOneLeft}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-l-2 border-red-800 border-opacity-30 border-dashed">01</div>
            
          </div>

          <div className="SIDE-INFO  text-white absolute -right-1/4  bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700
          border-r-8 border-red-800 border-opacity-30 p-2" ref={projectOneRight}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-r-2 border-red-800 border-opacity-30 border-dashed">
              <img src={edgescoutPNG} alt=""/>
            </div>
            
          </div>
          <div className="flex justify-center opacity-0 transition-all duration-1000" ref={projectOneDetails}>
            <ProjectOne/> 
          </div>
          
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