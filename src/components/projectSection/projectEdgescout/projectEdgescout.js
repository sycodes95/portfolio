

import { useEffect, useRef } from "react";
import edgescoutproject from "../../../images/edgescoutproject.png"
import jobtrackrproject from "../../../images/jobtrackrDemo.png"
import jobtrackr from "../../../images/jobtrackr.png"

import Icon from '@mdi/react';
import { mdiHammerWrench, mdiWeb, mdiApplicationOutline, mdiDatabaseOutline} from '@mdi/js';

function ProjectEdgescout () {

  const projectContainerRef = useRef(null)

  const projectTitleRef = useRef(null)

  const projectCornersRef = useRef([])

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
      name: 'MongoDB'
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
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projectContainerRef.current.classList.remove('pt-10')
          projectContainerRef.current.classList.add('pb-10')
          projectContainerRef.current.classList.remove('opacity-0')
          projectTitleRef.current.classList.add('text-glow-white')
          projectCornersRef.current.forEach(ref => {
            if(ref) ref.classList.remove('rotate-180')
          })
        } 
      });
    }, { root : null, threshold : 1});
    
    observer.observe(projectContainerRef.current);
    
  }, []);
  
  return (
    <div className='flex justify-center pt-10 overflow-visible transition-all duration-1000 opacity-0 h-fit'
    ref={projectContainerRef}>

      <div className="relative flex flex-col max-w-xl p-8 overflow-visible text-white width-768px-90pct font-black-outline-light text-md max-width-480px-flex-col">
        <section>
          <div className="absolute top-0 right-0 w-6 h-6 transition-all duration-500 delay-1000 rotate-180 border-t border-r"
          ref={ref => projectCornersRef.current.push(ref)}></div>
          <div className="absolute w-6 h-6 transition-all duration-1000 rotate-180 border-t border-r right-2 top-2"
          ref={ref => projectCornersRef.current.push(ref)}></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 transition-all duration-500 delay-1000 rotate-180 border-b border-l"
          ref={ref => projectCornersRef.current.push(ref)}></div>
          <div className="absolute w-6 h-6 transition-all duration-1000 rotate-180 border-b border-l left-2 bottom-2"
          ref={ref => projectCornersRef.current.push(ref)}></div>
        </section>
        <section className="relative flex flex-col h-full gap-4 transition-all duration-700 max-width-480px-width-full whitespace-nowrap gap-x-2"
         >
          <div className="flex justify-end h-full">
            <p className="flex h-full pl-1 pr-1 text-lg font-bold text-black bg-green-400 rounded-sm top-4 left-4 ">//project_02</p>
          </div>

          <div className="flex justify-end w-full h-full pt-2"> 
            <p className="flex h-full font-bold text-green-400 text-opacity-0 transition-all duration-500 delay-1000 font-4vw font-white-outline font-family-field-exoplane"
            ref={projectTitleRef}>EDGE SCOUT</p>
            {/* <div className="flex justify-between p-4 bg-black border-b gap-x-2 bg-opacity-20">
              {
              toolsElements.map(tool => (
                tool.jsx
              ))
              } 
            </div> */}
            
          </div>
          <div id="description" className="flex p-4 text-sm text-right whitespace-pre-wrap bg-black border-r border-green-400 rounded-sm bg-opacity-40">
            Trading journal app made to help traders track and refine their strategies with data visualization and analysis features.

          </div>

          <div className="flex justify-end">
            {
            toolsElements.map((tool, index) => (
              <p key={index} className={`text-xs pl-4 
              ${index !== toolsElements.length - 1 && 'pr-4' }
              ${index !== toolsElements.length - 1 && 'border-r'}`}>{tool.name}</p>
            ))
            }
          </div>

          <div className="z-10 flex justify-end gap-4 pt-2">
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
          <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full">
            <Icon className="h-full text-white text-opacity-5" path={mdiHammerWrench} />
          </div>
          
        </section>

        
          
        

      </div>
       
    </div>
  )
}
export default ProjectEdgescout;