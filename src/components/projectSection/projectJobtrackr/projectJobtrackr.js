

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
    <div className='flex h-fit'
    ref={projectContainerRef}>

      <div className="relative flex flex-col max-w-xl p-8 overflow-visible text-white font-black-outline-light text-md max-width-480px-flex-col">
        <section>
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l"></div>
          <div className="absolute w-6 h-6 border-t border-l left-2 top-2"></div>
        </section>
        <section className="flex flex-col h-full transition-all duration-700 max-width-480px-width-full whitespace-nowrap gap-x-2"
         >
          <div className="flex h-full">
            <p className="flex h-full text-white text-opacity-0 top-4 left-4 home-text-small font-10vw font-white-outline">01</p>
            <p className="flex text-green-400 top-4 left-4 home-text-small font-10vw">.</p>
          </div>
          <div className="flex flex-col w-full h-full"> 
            <p className="z-50 flex w-full h-full font-bold text-green-400 font-6vw font-black-outline font-family-field-exoplane">JOB Trackr</p>
            <div className="flex justify-between p-4 bg-black border-b gap-x-2 bg-opacity-20">
              {
              toolsElements.map(tool => (
                tool.jsx
              ))
              } 
            </div>
            <div id="description" className="p-4 text-sm whitespace-pre-wrap ">
            Job application tracker for managing and gaining data driven insights into the users’ job hunting journey. Features
            sorting, filtering, searching, and data visualizations.
            </div>
          </div>
          
        </section>

        
          
        

      </div>
       
    </div>
  )
}

export default ProjectJobtrackr;