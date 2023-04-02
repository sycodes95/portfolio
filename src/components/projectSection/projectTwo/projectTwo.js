

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"

function ProjectTwo () {
  
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
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  const handleViewFrontEnd = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  const handleViewBackEnd = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
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
    <div className='PROJECT-CONTAINER w-2/4 transition-all
    bg-black bg-opacity-25 grid grid-cols-2 gap-2'
    >
      <section className="h-12 w-full  col-span-full text-white font-black-outline-light  text-md
      flex items-center relative overflow-hidden">
        <div className="p-4 bg-white bg-opacity-30 h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700"
         ref={projectTwoTitle}>
          <p>[02] PROJECT:</p> <p>JOB TRACKR</p> 
        </div>
        <div className="h-full w-full bg-striped-dark-thick"></div>

      </section>

      <section className="col-span-full h-full relative"> 
        <div className="flex justify-center border-l-4 border-r-4 border-red-800 border-opacity-25 ">
          <div className="relative  flex justify-center items-center overflow-hidden p-4 
          bg-black">
            <img className=" grayscale hover:cursor-pointer z-10 h-full" src={edgescoutproject} ref={imageRef}/>
            <div className={`overlay absolute bg-black bg-opacity-40 z-10 w-full h-full
            hover:bg-opacity-0 hover:cursor-pointer
            transition-all bg-cover`}
            onClick={handleViewSite}
            >
            </div>
            
          </div>
        </div>
        <div className="text-gray-400 text-sm z-50  w-full flex gap-4  justify-between  p-2 
         bg-striped-dark-alt">
          
          <p className="w-full flex text-xs text-center justify-center items-center p-1 gap-4 text-red-400 font-black-outline-light">
            A JOB APPLICATION TRACKER, BUILT TO HELP JOB SEEKERS IMPROVE THEIR APPLICATION STRATEGIES IN THE JOB MARKET. 
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
      </section>
       
    </div>

  )
}

export default ProjectTwo;