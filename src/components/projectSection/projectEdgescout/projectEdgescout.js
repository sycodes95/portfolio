



import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import jobtrackrproject from "../../../images/jobtrackrDemo.png"
import edgescout from "../../../images/edgescout.png"
function ProjectEdgescout () {

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
      jsx: <i class="devicon-mongodb-plain-wordmark text-2xl  fill-current "></i>,
      name: 'PostgreSQL'
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

    const options = {
      root: null,
      threshold: 0.8,
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('intersect');
          projectContainerRef.current.classList.add('border-glow-white');
          projectContainerRef.current.classList.remove('border-glow-none');
          
        }
      });
    }, options);
    
    observer.observe(projectContainerRef.current);
    
  }, []);
  
  
  return (
    <div className='PROJECT-CONTAINER w-1/2 transition-all duration-1000
    bg-black bg-opacity-25 flex overflow-hidden rounded-4xl 
    max-width-1200px-w-60pct max-width-968px-w-70pct rounded-xl border-glow-none '
    ref={projectContainerRef}>
      <div className=" w-full  col-span-full text-white font-black-outline-light text-md
      flex items-center relative overflow-hidden">

        <section className="w-1/2 p-4 bg-striped-dark-alt  h-full flex items-center whitespace-nowrap gap-x-2 transition-all duration-700">
          <p className="absolute top-4 left-4 project-number-text text-black text-opacity-0 font-white-outline">02</p>
          <img src={edgescout}/>
        </section>
        <section className="w-1/2 flex flex-col bottom-0 z-50 h-full w-full">
        
          <div className="relative flex-grow text-gray-400 text-sm z-50 h-full w-full flex gap-4  justify-between  p-2 
          bg-black bg-opacity-50">
            <p className="w-full flex text-xs text-center justify-center items-center gap-4 text-gray-400 font-black-outline-light
            z-50">
              
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
        </section>

      </div>


       
    </div>
  )
}

export default ProjectEdgescout;