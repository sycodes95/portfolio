

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import jobtrackrproject from "../../../images/jobtrackrDemo.png"
import jobtrackr from "../../../images/jobtrackr.png"

import Icon from '@mdi/react';
import { mdiHammerWrench, mdiWeb, mdiApplicationOutline, mdiDatabaseOutline} from '@mdi/js';

function ProjectJobtrackr () {

  const projectContainerRef = useRef(null)

  const toolsElements = [
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
      name: 'Node.Js'
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
  
  
  return (
    <div className='flex justify-center h-fit'
    ref={projectContainerRef}>

      <div className="relative flex flex-col max-w-xl p-8 overflow-visible text-white width-768px-90pct font-black-outline-light text-md max-width-480px-flex-col">
        <section>
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l"></div>
          <div className="absolute w-6 h-6 border-t border-l left-2 top-2 "></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r "></div>
          <div className="absolute w-6 h-6 border-b border-r right-2 bottom-2"></div>
        </section>
        <section className="relative flex flex-col h-full gap-4 transition-all duration-700 max-width-480px-width-full whitespace-nowrap gap-x-2"
         >
          <div className="flex h-full">
            <p className="flex h-full pl-1 pr-1 text-lg font-bold text-black bg-green-400 rounded-sm top-4 left-4 ">//project_01</p>
          </div>
          <div className="flex flex-col w-full h-full pt-2"> 
            <p className="z-50 flex w-full h-full font-bold text-green-400 text-opacity-0 font-4vw font-white-outline text-glow-white font-family-field-exoplane">JOB Trackr</p>
            {/* <div className="flex justify-between p-4 bg-black border-b gap-x-2 bg-opacity-20">
              {
              toolsElements.map(tool => (
                tool.jsx
              ))
              } 
            </div> */}
            
          </div>
          <div id="description" className="p-4 text-sm whitespace-pre-wrap bg-black border-l border-green-400 rounded-sm bg-opacity-40">
            Job application tracker for managing and gaining data driven insights into the users’ job hunting journey. Features
            sorting, filtering, searching, and data visualizations.
          </div>

          <div className="flex">
            {
            toolsElements.map((tool, index) => (
              <p key={index} className={`text-xs pr-4 
              ${index !== 0 && 'pl-4' }
              ${index !== toolsElements.length - 1 && 'border-r'}`}>{tool.name}</p>
            ))
            }
          </div>

          <div className="z-10 flex gap-4 pt-2">
            <button className="transition-colors hover:text-green-400" onClick={handleViewSite}>
              <Icon path={mdiWeb} size={1} />
            </button>
            <button className="transition-colors hover:text-green-400" onClick={handleViewFrontEnd}>
              <Icon path={mdiApplicationOutline} size={1} />
            </button>
            <button className="transition-colors hover:text-green-400" onClick={handleViewBackEnd}>
              <Icon path={mdiDatabaseOutline} size={1} />
            </button>
          </div>
          <div className="absolute top-0 right-0 flex items-center justify-end w-full h-full">
            <Icon className="h-full text-white text-opacity-5" path={mdiHammerWrench} />
          </div>
          
        </section>

        
          
        

      </div>
       
    </div>
  )
}

export default ProjectJobtrackr;