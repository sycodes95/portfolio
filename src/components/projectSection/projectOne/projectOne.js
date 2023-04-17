

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import edgescoutPNG from "../../../images/edgescout.png"
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';


function ProjectOne () {
  
  const imageRef = useRef(null)

  const projectOneTitle = useRef(null)

  const toolsElements = [
    {
      jsx: <i class="devicon-javascript-plain text-2xl  fill-current "></i>,
      name: 'Javascript'
    },
    {
      jsx: <i class="devicon-react-original text-2xl  fill-current "></i>,
      name: 'React'
    },
    {
      jsx: <i class="devicon-tailwindcss-plain text-2xl  fill-current "></i>,
      name: 'Tailwind'
    },
    {
      jsx: <i class="devicon-nodejs-plain text-2xl  fill-current "></i>,
      name: 'Node JS'
    },
    {
      jsx: <i class="devicon-express-original text-2xl  fill-current "></i>,
      name: 'Express'
    },
    {
      jsx: <i class="devicon-mongodb-plain-wordmark text-2xl  fill-current "></i>,
      name: 'Mongo DB'
    },
  ]

  const handleViewSite = () => {
    window.open('https://edgescout.up.railway.app/');
  }

  const handleViewFrontEnd = () => {
    window.open('https://github.com/sycodes95/trading-journal');
  }
  const handleViewBackEnd = () => {
    window.open('https://github.com/sycodes95/trading-journal-api');
  }
  
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
    <div className='PROJECT-CONTAINER w-2/4 transition-all
    bg-black bg-opacity-25 grid grid-cols-2 gap-2 p-2 border-glow-yellow'
    >
      <section className="h-12 w-full bg-striped-dark-alt col-span-full text-white text-glow-yellow text-md
      flex items-center relative overflow-hidden">
        <div className="p-4 font-black-outline-light  h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700 "
         ref={projectOneTitle}>
          <p>[02] PROJECT:</p> <p>EDGE SCOUT</p> 
        </div>
        <div className="h-full w-full bg-striped-dark-thick"></div>

      </section>

      <section className="col-span-full h-full relative"> 
        <div className="flex justify-center">
          <div className="relative  flex justify-center items-center overflow-hidden
          bg-black">
            
            <img className=" grayscale hover:cursor-pointer z-10 h-full" src={edgescoutproject} ref={imageRef}/>
            <div className={`overlay absolute bg-yellow-700 bg-opacity-30 z-10 w-full h-full
            hover:bg-opacity-0 hover:cursor-pointer
            transition-all bg-cover`}
            onClick={handleViewSite}
            >
            </div>
            
          </div>
        </div>

        <div className=" bottom-0 z-50 w-full">
        
          <div className="text-gray-400 text-sm z-50  w-full flex gap-4  justify-between  p-2 
          bg-black bg-opacity-50">
            
            <p className="w-full flex text-xs text-center justify-center items-center gap-4 text-yellow-400 font-black-outline-light">
              A TRADING JOURNAL APP, BUILT TO HELP TRADERS FIND AND REFINE THEIR STRATEGIES FOR BETTER PROFITABILITY IN THE FINANCIAL MARKETS.
            </p>
            
          </div>

          <div className="text-gray-400 text-sm z-50  w-full flex flex-row  gap-4   p-2
          bg-black font-bold">
            
            <div className="flex w-full text-xs  max-width-480px-flex-col">
              <p className="w-full flex justify-center items-center p-1 gap-4 text-white 
              border-r-2 border-white border-opacity-50 max-width-480px-border-none rounded-sm relative">
                DATA VIS 
              </p>
              <p className="w-full flex justify-center items-center p-1 gap-4 text-white 
              border-r-2 border-white border-opacity-50 max-width-480px-border-none rounded-sm">
                CRUD
              </p>
              <p className="w-full flex justify-center items-center p-1 gap-4 text-white 
              border-r-2 border-white border-opacity-50 max-width-480px-border-none rounded-sm">
                FILTER
              </p>
              <p className="w-full flex justify-center items-center p-1 gap-4 text-white 
              border-r-2 border-white border-opacity-50 max-width-480px-border-none rounded-sm">
                SEARCH
              </p>
              <p className="w-full flex justify-center items-center p-1 gap-4 text-white  rounded-sm">
                AUTHENTICATION
              </p>
            </div>
            
          </div>

          <div className="text-gray-400 text-xs z-50  w-full grid grid-cols-2 max-width-1440px-grid-cols-1 gap-4  justify-between  p-2 
          bg-black ">
            <div className="grid grid-cols-3 gap-1 transition-all">
              <button className="h-full w-full text-white bg-emerald-400 bg-opacity-40 rounded-sm p-2 transition-all hover:bg-opacity-30" onClick={handleViewSite}>
                VIEW SITE
              </button>
              <button className="h-full w-full text-white bg-gray-400 bg-opacity-40 rounded-sm p-2 transition-all hover:bg-opacity-30" onClick={handleViewFrontEnd}>FRONT END REPO</button>
              <button className="h-full w-full text-white bg-gray-500 bg-opacity-40 rounded-sm p-2 transition-all hover:bg-opacity-30" onClick={handleViewBackEnd}>BACK END REPO</button>
            </div>
            <div className="flex justify-between pl-4 pr-4">
              {
              toolsElements.map(tool => (
                tool.jsx
              ))
              }
            </div>
            
          </div>
        </div>
      </section>
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