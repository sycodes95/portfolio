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
import ProjectRlMechanics from "./projectRlMechanics/projectRlMechanics";
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

      if(projectsRepeatRef.current){
        projectsRepeatRef.current.style.right = percentage + '%'
      }
      prevScroll = window.scrollY
      
    }
    
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className='relative flex flex-col pt-4 pb-16 PROJECT-SECTION gap-y-16 '>
      
      <section className="relative flex items-center h-8 mt-4 overflow-visible bg-green-300 bg-opacity-40">
        <div className="absolute z-10 w-full h-8 -translate-y-1/2 top-1/2 bg-hammer-black">
        </div>
        <div className="relative z-10 flex justify-center w-full rounded-full" >
         
          <div className="top-0 z-40 flex">
            <p className="text-6xl font-bold text-green-400">_</p>
            <p className="text-6xl text-white font-family-field-exoplane">projects</p>
            <p className="text-6xl font-bold text-green-400">_</p>
          </div>
          {/* <div className="flex text-white ">
            <p className="text-5xl font-bold text-white ">projects</p>
          </div> */}
          
        </div> 
      </section>
        
      <section className='mt-8 overflow-visible gap-x-8 max-width-768px-overflow-visible' >
        
        <div className="flex justify-center overflow-visible transition-all duration-1000 delay-200 opacity-100 " >
          <ProjectRlMechanics/> 
        </div>

      </section>
      
      <section className='mt-8 overflow-visible gap-x-8 max-width-768px-overflow-visible' >
        
        <div className="flex justify-center overflow-visible transition-all duration-1000 delay-200 opacity-100 " >
          <ProjectJobtrackr/> 
        </div>

      </section>


        
      <section className='overflow-hidden gap-x-8 max-width-768px-overflow-visible' >
          
        <div className="flex justify-center transition-all duration-1000 delay-200" >
          <ProjectEdgescout/> 
        </div>

      </section>

    </div>

  )
}

export default ProjectSection;