

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import jobtrackrproject from "../../../images/jobtrackrDemo.png"
import jobtrackr from "../../../images/jobtrackr.png"
function ProjectJobtrackr () {

  const projectContainerRef = useRef(null)

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
      jsx: <i class="devicon-postgresql-plain-wordmark text-2xl  fill-current "></i>,
      name: 'PostgreSQL'
    },
  ]

  const handleViewSite = () => {
    window.open('https://jobtrackr.pro');
  }

  const handleViewFrontEnd = () => {
    window.open('https://github.com/sycodes95/jobtrackr');
  }
  const handleViewBackEnd = () => {
    window.open('https://github.com/sycodes95/jobtrackr-api');
  }
  
  // useEffect(() => {

  //   const options = {
  //     root: null,
  //     threshold: 0.8,
  //   };
    
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         projectContainerRef.current.classList.add('border-glow-white');
  //         projectContainerRef.current.classList.remove('border-glow-none');
          
  //       }
  //     });
  //   }, options);
    
  //   observer.observe(projectContainerRef.current);
    
  // }, []);
  
  
  return (
    <div className='flex w-1/2'
    ref={projectContainerRef}>

      <div className="relative flex flex-col overflow-hidden text-white font-black-outline-light text-md max-width-480px-flex-col">

        <section className="flex flex-col h-full transition-all duration-700 max-width-480px-width-full whitespace-nowrap gap-x-2"
         >
          <div className="flex h-full">
          <p className="flex h-full text-white text-opacity-0 top-4 left-4 home-text-small font-10vw font-white-outline">01</p>
          <p className="flex text-green-400 top-4 left-4 home-text-small font-10vw">.</p>
          <p className="flex text-green-400 top-4 left-4 home-text-small font-10vw"></p>
          </div>
          <div className="flex h-full">
          <p className="flex w-full h-full font-bold text-green-400 font-6vw font-black-outline font-family-field-exoplane ">JOB Trackr</p>
          
          </div>
        </section>

        <section className="bottom-0 z-30 flex flex-col h-full">
        
          <div className="relative flex flex-wrap h-full p-2 text-sm text-gray-400 bg-black bg-opacity-50">
            <p className="z-50 flex items-center justify-center w-full gap-4 text-sm text-center text-gray-400 font-black-outline-light">
              
            Job application tracker for managing and gaining data driven insights into the users’ job hunting journey. Features
            sorting, filtering, searching, and data visualizations.
            </p>
            
          </div>

          {/* <div className="flex flex-row gap-4 p-2 text-sm font-bold text-gray-400 bg-black">
            
            <div className="flex w-full text-xs max-width-480px-flex-col">
              <p className="relative flex items-center justify-center w-full gap-4 p-1 text-white border-r-2 border-white border-opacity-50 rounded-sm max-width-480px-border-none">
                DATA VIS 
              </p>
              <p className="flex items-center justify-center w-full gap-4 p-1 text-white border-r-2 border-white border-opacity-50 rounded-sm max-width-480px-border-none">
                CRUD
              </p>
              <p className="flex items-center justify-center w-full gap-4 p-1 text-white border-r-2 border-white border-opacity-50 rounded-sm max-width-480px-border-none">
                FILTER
              </p>
              <p className="flex items-center justify-center w-full gap-4 p-1 text-white border-r-2 border-white border-opacity-50 rounded-sm max-width-480px-border-none">
                SEARCH
              </p>
              <p className="flex items-center justify-center w-full gap-4 p-1 text-white rounded-sm">
                AUTH
              </p>
            </div>
            
          </div>

          <div className="z-50 grid justify-between w-full grid-cols-1 gap-4 p-2 text-xs text-gray-400 bg-black max-width-1440px-grid-cols-1 ">
            <div className="grid grid-cols-3 gap-1">
              <button className="w-full h-full p-2 text-white transition-all bg-opacity-50 rounded-sm bg-emerald-400 hover:bg-opacity-30" 
              onClick={handleViewSite}>
                VIEW SITE
              </button>
              <button className="w-full h-full text-white transition-all bg-gray-400 rounded-sm bg-opacity-60 hover:bg-opacity-30" 
              onClick={handleViewFrontEnd}>FRONT END REPO</button>
              <button className="w-full h-full text-white transition-all bg-gray-400 rounded-sm bg-opacity-60 hover:bg-opacity-30" 
              onClick={handleViewBackEnd}>BACK END REPO</button>
            </div>
            <div className="flex justify-between pl-4 pr-4">
              {
              toolsElements.map(tool => (
                tool.jsx
              ))
              } 
            </div>
            
          </div> */}
        </section>

      </div>
       
    </div>
  )
}

export default ProjectJobtrackr;