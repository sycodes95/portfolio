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
  
  // const projectOne = useRef(null)

  // const projectOneDetails = useRef(null)

  // const projectOneLeft = useRef(null);

  // const projectOneRight = useRef(null);

  // const projectTwo = useRef(null)

  // const projectTwoDetails = useRef(null)

  // const projectTwoLeft = useRef(null);

  // const projectTwoRight = useRef(null);

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
  
  // useEffect(() => {

  //   const options = {
  //     root: null,
  //     threshold: 0.5,
  //   };
    
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
         
  //         // projectIconRef.current.forEach(ref => {
  //         //   ref.classList.add('opacity-100')
  //         //   ref.classList.remove('opacity-0')
  //         // })
  //       } 
  //     });
  //   }, options);
    
  //   observer.observe();
    
  // }, []);

  // useEffect(() => {

  //   const options = {
  //     root: null,
  //     threshold: 0.5,
  //   };
    
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
      
  //         projectTwoLeft.current.classList.add('left-0');
  //         projectTwoLeft.current.classList.remove('-left-1/4');

  //         projectTwoRight.current.classList.add('right-0');
  //         projectTwoRight.current.classList.remove('-right-1/4');

  //         projectTwoDetails.current.classList.add('opacity-100');
  //         projectTwoDetails.current.classList.remove('opacity-0');
  //       } 
  //     });
  //   }, options);
    
  //   observer.observe(projectTwo.current);
   
  // }, []);
  
  return (
    <div className='flex flex-col pt-12 pb-24 PROJECT-SECTION gap-y-16 bg-hammer'>

      <section>
        <div className="relative z-10 flex justify-center w-full rounded-full" >
          <Icon className="text-gray-300 transition-all duration-1000 delay-500 rounded-full " 
          path={mdiHammerWrench} size={3.2} ref={ref => projectIconRef.current[1] = ref}/>
        </div> 
      </section>
        
      <section className="relative flex items-center justify-center transition-all duration-1000 rounded-sm" ref={bannerLineRef}>
        <div className="absolute right-0 flex items-center overflow-hidden text-4xl font-thin text-gray-300 transition-all duration-300 translate-x-1/2 w-fit text-opacity-60 font-family-field-gothic whitespace-nowrap" ref={projectsRepeatRef}>
          {
          projectsRepeat.map((str, index) => (
            <p key={index}>{str}</p>
          ))
          }
        </div>
      </section>
      
      <section className='mt-16 overflow-hidden gap-x-8 max-width-768px-overflow-visible' >
        
        
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