import ProjectOne from "./projectEdgescout/projectEdgescout";

import edgescoutPNG from "../../images/edgescout.png"
import jobtrackrPNG from "../../images/jobtrackr.png"
import { useEffect, useRef } from "react";
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';
import warmlight from "../../images/warmlight.png"
import spotlight1 from '../../images/spotlight1.png'
import ProjectTwo from "./projectJobtrackr/projectJobtrackr";
import blackHammer from "../../images/black-hammer.png"
import hammersvg from "../../images/hammer-wrench.svg"
import { ReactSVG } from "react-svg";
import ProjectJobtrackr from "./projectJobtrackr/projectJobtrackr";
import ProjectEdgescout from "./projectEdgescout/projectEdgescout";
function ProjectSection () {

  const projectsRepeat = Array.from({ length: 200 }, () => 'PROJECTS-');


  const projectsRepeatRef = useRef(null)

  const projectIconRef = useRef([]);

  const bannerLineRef = useRef(null)

  useEffect(()=>{
    let prevScroll = 0;
    let percentage = 0;

    const handleScroll = () =>{
        
      if(prevScroll < window.scrollY){
        percentage += 0.25
      } else {
        percentage -= 0.25
      }
      if (window.scrollY === 0) {
        percentage = 0; 
      }

      projectsRepeatRef.current.style.right = percentage + '%'
      
      prevScroll = window.scrollY
      
    }
    
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className='flex flex-col pt-12 PROJECT-SECTION gap-y-16 bg-hammer'>

      <section>
        <div className="relative z-10 flex justify-center w-full rounded-full" >
          
          {/* <Icon className="text-white transition-all duration-1000 delay-500 rounded-full " 
          path={mdiHammerWrench} size={2} ref={ref => projectIconRef.current[1] = ref}/> */}
          
          <div className="absolute top-0 z-40 flex">
          <p className="text-6xl font-bold text-green-400">_</p>
            <p className="text-6xl font-bold text-white text-opacity-0 font-white-outline">projects</p>
            <p className="text-6xl font-bold text-green-400">_</p>
          </div>
          <div className="flex text-white ">
            <p className="text-5xl font-bold text-white ">projects</p>
          </div>
          
          
          
        </div> 
      </section>
        
      {/* <section className="relative flex items-center justify-center transition-all duration-1000 rounded-sm" ref={bannerLineRef}>
        <div className="absolute right-0 flex items-center overflow-hidden text-4xl font-thin text-gray-300 transition-all duration-300 translate-x-1/2 w-fit text-opacity-60 font-family-field-gothic whitespace-nowrap" ref={projectsRepeatRef}>
          {
          projectsRepeat.map((str, index) => (
            <p key={index}>{str}</p>
          ))
          }
        </div>
      </section> */}
      
      <section className='mt-8 overflow-hidden gap-x-8 max-width-768px-overflow-visible' >
        
        
        <div className="flex justify-center transition-all duration-1000 delay-200 opacity-100 " >
          <ProjectJobtrackr/> 
        </div>
          
        

      </section>


        
      <section className='mt-16 overflow-hidden gap-x-8 max-width-768px-overflow-visible' >
          
        <div className="flex justify-center transition-all duration-1000 delay-200" >
          <ProjectEdgescout/> 
        </div>
          

      </section>
      
      


      
      {
        /*
        <section className='grid mt-24 shadow-md gap-x-8' ref={projectTwo}>
        
          <div className="absolute flex items-center justify-center w-48 h-48 text-center text-white transition-all duration-500 bg-black bg-opacity-25 border-2 border-black SIDE-INFO -left-1/4 text-8xl bg-striped-3 right-corner-clip" ref={projectTwoLeft}>
            <div className="">02</div>
          </div>

          <div className="absolute flex items-center justify-center w-48 h-48 text-center text-white transition-all duration-500 bg-black bg-opacity-25 border-2 border-black SIDE-INFO -right-1/4 text-8xl bg-striped-3" ref={projectTwoRight}>
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