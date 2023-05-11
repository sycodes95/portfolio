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
    <div className='PROJECT-SECTION flex flex-col pb-24 pt-12 gap-y-16 bg-hammer'>

      <section>
        <div className="relative flex justify-center w-full z-10 rounded-full" >
          <Icon className=" text-gray-300  transition-all delay-500 duration-1000  rounded-full" 
          path={mdiHammerWrench} size={3.2} ref={ref => projectIconRef.current[1] = ref}/>
        </div> 
      </section>
        
      <section className="relative flex justify-center items-center 
      rounded-sm transition-all duration-1000" ref={bannerLineRef}>
        <div className="absolute right-0 translate-x-1/2 flex items-center w-fit text-gray-300 text-opacity-60 text-8xl font-thin font-family-field-gothic
        overflow-hidden whitespace-nowrap transition-all duration-300" ref={projectsRepeatRef}>
          {
          projectsRepeat.map((str, index) => (
            <p key={index}>{str}</p>
          ))
          }
        </div>
      </section>
      
      <section className='gap-x-8 overflow-hidden max-width-768px-overflow-visible mt-16' >
        
        
        <div className="flex justify-center opacity-100 transition-all delay-200 duration-1000 " >
          <ProjectJobtrackr/> 
        </div>
          
        

      </section>


        
      <section className=' gap-x-8 overflow-hidden max-width-768px-overflow-visible mt-16' >
          
        <div className="flex justify-center transition-all delay-200 duration-1000" >
          <ProjectEdgescout/> 
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