

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import jobtrackrproject from "../../../images/jobtrackrDemo.png"
import jobtrackr from "../../../images/jobtrackr.png"
function ProjectJobtrackr () {
  
  const imageRef = useRef(null)

  const projectTwoTitle = useRef(null)

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
  
  useEffect(() => {
    if(projectTwoTitle) {
      

      const options = {
        root: null,
        threshold: 0.1,
      };
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('intersect');
            projectTwoTitle.current.classList.add('left-0');
            projectTwoTitle.current.classList.remove('-left-full');
            
            
            
          }
        });
      }, options);
      
      observer.observe(projectTwoTitle.current);
      
    }
    
  }, []);
  
  
  return (
    <div className='PROJECT-CONTAINER w-1/2 transition-all
    bg-black bg-opacity-25 flex border-glow-white overflow-hidden rounded-4xl 
    max-width-1200px-w-60pct max-width-968px-w-70pct'
    >
      <section className=" w-full  col-span-full text-white font-black-outline-light text-md
      flex items-center relative overflow-hidden">
        <div className="
        p-4 h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700 border-r-2 border-black"
         ref={projectTwoTitle}>
          <p className="project-number-text">01</p>
        </div>

        <div className=" p-4 bg-striped-dark-alt  h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700"
         >
          <img src={jobtrackr}/>
        </div>
         

      </section>



      <section className="col-span-full h-full relative"> 
        

        <div className="flex flex-col bottom-0 z-50 h-full w-full">
        
          <div className="relative flex-grow text-gray-400 text-sm z-50 h-full w-full flex gap-4  justify-between  p-2 
          bg-black bg-opacity-50">
            <p className="w-full flex text-xs text-center justify-center items-center gap-4 text-gray-400 font-black-outline-light
            z-50">
              
              A JOB APPLICATION TRACKER, BUILT TO HELP JOB SEEKERS MANAGE AND IMPROVE THEIR APPLICATION STRATEGIES IN THE JOB MARKET.
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
                AUTH
              </p>
            </div>
            
          </div>

          <div className="text-gray-400 text-xs z-50  w-full grid grid-cols-1 max-width-1440px-grid-cols-1 gap-4  justify-between  p-2 
          bg-black ">
            <div className="grid grid-cols-3 gap-1">
              <button className="h-full w-full bg-emerald-400 bg-opacity-50 
               text-white rounded-sm p-2 transition-all hover:bg-opacity-30" 
              onClick={handleViewSite}>
                VIEW SITE
              </button>
              <button className="h-full w-full bg-gray-400 bg-opacity-60 text-white rounded-sm transition-all
               hover:bg-opacity-30" 
              onClick={handleViewFrontEnd}>FRONT END REPO</button>
              <button className="h-full w-full bg-gray-400 bg-opacity-60 text-white rounded-sm transition-all hover:bg-opacity-30" 
              onClick={handleViewBackEnd}>BACK END REPO</button>
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
       
    </div>
  )
}

export default ProjectJobtrackr;