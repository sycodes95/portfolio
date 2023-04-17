import ProjectOne from "./projectOne/projectOne";

import edgescoutPNG from "../../images/edgescout.png"
import { useEffect, useRef } from "react";
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';
import warmlight from "../../images/warmlight.png"
import spotlight1 from '../../images/spotlight1.png'
import ProjectTwo from "./projectTwo/projectTwo";

function ProjectSection () {

  
  
  const projectOne = useRef(null)

  const projectOneDetails = useRef(null)

  const projectOneLeft = useRef(null);

  const projectOneRight = useRef(null);

  const projectTwo = useRef(null)

  const projectTwoDetails = useRef(null)

  const projectTwoLeft = useRef(null);

  const projectTwoRight = useRef(null);

  const projectIconRef = useRef([]);

  const projectsTitleP = useRef(null)
  const projectsTitleR = useRef(null)
  const projectsTitleO = useRef(null)
  const projectsTitleJ = useRef(null)
  const projectsTitleE = useRef(null)
  const projectsTitleC = useRef(null)
  const projectsTitleT = useRef(null)
  const projectsTitleS = useRef(null)

  const bannerLineRef = useRef(null)
  
  useEffect(() => {
    
      

    const options = {
      root: null,
      threshold: 0.5,
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

          bannerLineRef.current.classList.add('h-10')

          bannerLineRef.current.classList.remove('h-0')

          projectIconRef.current.forEach(ref => {
            ref.classList.add('opacity-100')
            ref.classList.remove('opacity-0')
          })

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
    
  }, []);

  useEffect(() => {

    const options = {
      root: null,
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
      
          projectTwoLeft.current.classList.add('left-0');
          projectTwoLeft.current.classList.remove('-left-1/4');

          projectTwoRight.current.classList.add('right-0');
          projectTwoRight.current.classList.remove('-right-1/4');

          projectTwoDetails.current.classList.add('opacity-100');
          projectTwoDetails.current.classList.remove('opacity-0');
        } 
      });
    }, options);
    
    observer.observe(projectTwo.current);
   
  }, []);
  
  return (
    <div className='PROJECT-SECTION flex flex-col pb-24 pt-12 gap-y-16  bg-hammer'>
        
      <section className=" relative  flex justify-center items-center 
      rounded-sm h-0 transition-all duration-1000" ref={bannerLineRef}>
      
        <div className="ICON-CONTAINER bg-yellow-700 bg-opacity-70 h-full w-full flex items-center relative ">
          
          <div className="flex justify-start ml-2 w-fit z-10  " >
            <Icon className=" text-black opacity-0 transition-all delay-500 duration-1000" 
            path={mdiHammerWrench} size={1.5} ref={ref => projectIconRef.current[0] = ref}/>
            
          </div> 

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-white text-opacity-70
          whitespace-nowrap res-font gap-x-12 max-width-768px-gap-x-none">
            <p className="opacity-0 transition-opacity delay-300 duration-75" ref={projectsTitleP}>P</p>
            <p className="opacity-0 transition-opacity delay-300 duration-100" ref={projectsTitleR}>R</p>
            <p className="opacity-0 transition-opacity delay-300 duration-150" ref={projectsTitleO}>O</p>
            <p className="opacity-0 transition-opacity delay-300 duration-200" ref={projectsTitleJ}>J</p>
            <p className="opacity-0 transition-opacity delay-300 duration-300" ref={projectsTitleE}>E</p>
            <p className="opacity-0 transition-opacity delay-300 duration-500" ref={projectsTitleC}>C</p>
            <p className="opacity-0 transition-opacity delay-300 duration-700" ref={projectsTitleT}>T</p>
            <p className="opacity-0 transition-opacity delay-300 duration-1000" ref={projectsTitleS}>S</p>
            
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-black opacity-0 transition-all delay-500 duration-1000 flip" 
            path={mdiHammerWrench} size={1.5} ref={ref => projectIconRef.current[1] = ref}/>
          </div>
          
        </div>
        
      </section>
      <section className=' gap-x-8  overflow-hidden max-width-768px-overflow-visible' ref={projectOne}>
        
        <div className="flex justify-center">

          <div className="SIDE-INFO  text-yellow-700 font-black-outline-light absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700  right-corner-clip
          border-l-8 border-yellow-700 p-2" ref={projectOneLeft}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-l-2 border-yellow-700 border-dashed ">01</div>
            
          </div>

          <div className="SIDE-INFO  text-white absolute -right-1/4  bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700
          border-r-8 border-orange-800 border-opacity-40 p-2" ref={projectOneRight}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-r-2 border-orange-800 border-opacity-40 border-dashed">
              <img src={edgescoutPNG} alt=""/>
            </div>
            
          </div>
          <div className="flex justify-center opacity-0 transition-all delay-200 duration-1000" ref={projectOneDetails}>
            <ProjectTwo/> 
          </div>
          
        </div>

      </section>


        
      <section className=' gap-x-8 overflow-hidden max-width-768px-overflow-visible' ref={projectTwo}>
        
        <div className="flex justify-center">

          <div className="SIDE-INFO  text-red-800 font-black-outline-light absolute -left-1/4 bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700  right-corner-clip
          border-l-8 border-red-800 border-opacity-30 border-glow-white-right p-2" ref={projectTwoLeft}>

            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-l-2 border-red-800 border-opacity-30 border-dashed text-glow-red ">02</div>
            
          </div>

          <div className="SIDE-INFO  text-white absolute -right-1/4  bg-black bg-opacity-25 w-48 h-48
          flex justify-center items-center text-center text-8xl transition-all duration-700
          border-r-8 border-red-800 border-opacity-30 p-2" ref={projectTwoRight}>
            <div className="p-2 bg-striped-3 w-full h-full flex justify-center items-center 
            border-r-2 border-red-800 border-opacity-30 border-dashed">
              <img src={edgescoutPNG} alt=""/>
            </div>
            
          </div>
          <div className="flex justify-center opacity-0 transition-all delay-200 duration-1000" ref={projectTwoDetails}>
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

      
      

        

    </div>

  )
}

export default ProjectSection;