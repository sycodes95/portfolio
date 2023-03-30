

import { useEffect, useRef } from "react";
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";

function ProjectOne () {
  
  
  const projectOneTitle = useRef(null)
  
  useEffect(() => {
    if(projectOneTitle) {
      

      const options = {
        root: null,
        threshold: 0.1,
      };
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('intersect');
            projectOneTitle.current.classList.add('left-0');
            projectOneTitle.current.classList.remove('-left-full');
            
            
            
          }
        });
      }, options);
      
      observer.observe(projectOneTitle.current);
      
    }
    
  }, []);
  
  
  return (
    <div className='PROJECT-CONTAINER w-2/4
    bg-black bg-opacity-25 grid grid-cols-2 gap-2 '
    >
      <div className="h-12 w-full  col-span-full text-white font-black-outline-light  text-xl
      flex items-center relative overflow-hidden">
        <div className="p-4 bg-white bg-opacity-30 h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700"
         ref={projectOneTitle}>
          <p>[01] PROJECT:</p> <p>EDGE SCOUT</p> 
        </div>
        <div className="h-full w-full bg-striped-dark-thick"></div>

      </div>

      <div className="col-span-full h-full relative"> 
        <Demo/> 
        <div className="text-gray-400 text-sm  z-50  w-full flex gap-4  justify-between  p-1 border-l-4 border-r-4 border-red-800 border-opacity-40">
          <p className=" text-yellow-500  text-xl p-1 font-bold h-full ">GOAL</p>
          <p className="w-full flex justify-center items-center p-1">A TRADING JOURNAL APP, BUILT TO HELP TRADERS FIND AND REFINE THEIR STRATEGIES FOR BETTER PROFITABILITY.</p>
        </div>

        <div className="text-red-400 text-sm  z-50 w-full flex items-center justify-between bg-black bg-opacity-25 p-1 border-l-4 border-r-4 border-red-800 border-opacity-40">
          <p className=" text-white text-xl p-1 font-bold">FEATURES</p>
          <p>STATS, DATA VIS, FILTER, SEARCH, CRUD, AUTHENTICATION</p>
        </div>
      </div>
      {
      /*
      
      <div className="DEMO col-span-full"> 
        <Demo/> 
      </div>
      <div className="DETAIL flex flex-grow z-30 -left-1/2">
        <Detail/>
      </div>
      <div className="FEATURE flex flex-grow z-30">
        <Feature/>
      </div>
      */
      }
      
       
    </div>

  )
}

export default ProjectOne;