

import { useEffect, useRef } from "react";
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";

function ProjectOne () {
  
  
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
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  const handleViewFrontEnd = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  const handleViewBackEnd = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
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
    <div className='PROJECT-CONTAINER w-2/4 transition-all duration-700
    bg-black bg-opacity-25 grid grid-cols-2 gap-2'
    >
      <div className="h-12 w-full  col-span-full text-white font-black-outline-light  text-md
      flex items-center relative overflow-hidden">
        <div className="p-4 bg-white bg-opacity-30 h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700"
         ref={projectOneTitle}>
          <p>[01] PROJECT:</p> <p>EDGE SCOUT</p> 
        </div>
        <div className="h-full w-full bg-striped-dark-thick"></div>

      </div>

      <div className="col-span-full h-full relative"> 
        <Demo/> 
        <div className="text-gray-400 text-sm z-50  w-full flex gap-4  justify-between  p-2 
         bg-striped-dark-alt">
          
          <p className="w-full flex text-xs text-center justify-center items-center p-1 gap-4 text-red-400 font-black-outline-light">
            A TRADING JOURNAL APP, BUILT TO HELP TRADERS FIND AND REFINE THEIR STRATEGIES FOR BETTER PROFITABILITY IN THE FINANCIAL MARKETS.
          </p>
          
        </div>

        <div className="text-gray-400 text-sm z-50  w-full flex flex-row  gap-4   p-2
         bg-black bg-opacity-25 font-bold">
          
          <div className="flex w-full text-xs gap-1 max-width-768px-flex-col">
            <p className="w-full flex justify-center items-center p-1 gap-4 text-black bg-white bg-opacity-50 rounded-sm">
              DATA VIS
            </p>
            <p className="w-full flex justify-center items-center p-1 gap-4 text-black bg-white bg-opacity-30 rounded-sm">
              CRUD
            </p>
            <p className="w-full flex justify-center items-center p-1 gap-4 text-black bg-white bg-opacity-20 rounded-sm">
              FILTER
            </p>
            <p className="w-full flex justify-center items-center p-1 gap-4 text-black bg-white bg-opacity-30 rounded-sm">
              SEARCH
            </p>
            <p className="w-full flex justify-center items-center p-1 gap-4 text-black bg-white bg-opacity-50 rounded-sm">
              AUTHENTICATION
            </p>
          </div>
          
        </div>

        <div className="text-gray-400 text-xs z-50  w-full grid grid-cols-2 max-width-1440px-grid-cols-1 gap-4  justify-between  p-2 
         bg-black bg-opacity-75">
          <div className="grid grid-cols-3 gap-1">
            <button className="h-full w-full bg-cyan-600 bg-opacity-25 text-white rounded-sm p-2" onClick={handleViewSite}>
              VIEW SITE
            </button>
            <button className="h-full w-full bg-cyan-600 bg-opacity-25 text-white rounded-sm" onClick={handleViewSite}>FRONT END REPO</button>
            <button className="h-full w-full bg-cyan-600 bg-opacity-25 text-white rounded-sm" onClick={handleViewSite}>BACK END REPO</button>
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