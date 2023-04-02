
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import silhoutte from "../../images/silhoutte.png"
import Icon from '@mdi/react';
import { mdiDna } from '@mdi/js';
import { useState, useEffect, useRef } from "react";
import embers from "../../images/embers.png"
import cartoonlight from "../../images/cartoonlight.png"


function AboutSection () {
  const useObserver = useRef(true);

  const aboutSectionRef = useState(null)
  const aboutContentRef = useState(null)
  
  const toolsElements = [
    {
      jsx: <i class="devicon-javascript-plain text-4xl  fill-current hover:text-red-400 transition-all"></i>,
      name: 'Javascript'
    },
    {
      jsx: <i class="devicon-react-original text-4xl  fill-current "></i>,
      name: 'React'
    },
    {
      jsx: <i class="devicon-tailwindcss-plain text-4xl  fill-current "></i>,
      name: 'Tailwind'
    },
    {
      jsx: <i class="devicon-nodejs-plain text-4xl  fill-current "></i>,
      name: 'Node JS'
    },
    {
      jsx: <i class="devicon-express-original text-4xl  fill-current "></i>,
      name: 'Express'
    },
    {
      jsx: <i class="devicon-mongodb-plain-wordmark text-4xl  fill-current "></i>,
      name: 'Mongo DB'
    },
    {
      jsx: <i class="devicon-mongodb-plain-wordmark text-4xl  fill-current "></i>,
      name: 'Mongo DB'
    },
    {
      jsx: <i class="devicon-git-plain text-4xl  fill-current"></i>,
      name: 'Git'
    },
    {
      jsx: <i class="devicon-github-original text-4xl  fill-current"></i>,
      name: 'Github'
    },
  ]

  
  useEffect(() => {
    
      

    const options = {
      root: null,
      threshold: 0.2,
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutContentRef.current.classList.add('top-0');
          aboutContentRef.current.classList.remove('-top-full');
          
        }
      });
    }, options);
    
    observer.observe(aboutSectionRef.current);
    
   
    
  }, []);
  

  return (
    <section className='ABOUT-SECTION pb-24 pt-12 flex-col items-center bg-dna-big relative' ref={aboutSectionRef}>
      

      <div className="ABOUT-TITLE-BANNER
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4
       rounded-sm h-10">
        
        <div className="ICON-CONTAINER
         bg-green-300 bg-opacity-25
         h-full w-full 
         flex items-center 
         ">
          <div className="flex justify-start ml-2 w-fit">
            <Icon className=" text-black text-opacity-50 rounded-md" path={mdiDna} size={1.5} />
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-white text-opacity-70
          whitespace-nowrap res-font transition-all gap-x-12 max-width-768px-gap-x-none ">
            <p>A</p>
            <p>B</p>
            <p>O</p>
            <p>U</p>
            <p>T</p>
           

            
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className="text-black text-opacity-50 rounded-md" path={mdiDna} size={1.5} />
          </div>
          
          
        </div>
        
        
      </div>



      <div className="ABOUT-CONTAINER flex relative overflow-hidden justify-center mt-10 z-10 overflow-visible ">
        
        <div className="relative flex justify-center p-2 bg-black bg-opacity-25 border-glow-emerald
        border-4 border-opacity-50 border-white bg-dna -top-full transition-all duration-700 w-1/2 
        max-width-768px-width-full" ref={aboutContentRef}>
          
          <div className="ABOUT-BANNER absolute top-0 h-16 w-full bg-striped-dark-alt">

            <div className="absolute top-0 right-0 bg-black bg-opacity-40 h-16
            text-white text-4xl font-bold font-black-outline-light flex justify-center items-center p-4">
              <span>95'</span>
            </div>
            <div className="absolute flex flex-col top-0 left-0 h-16 text-white text-xs font-bold font-black-outline-light p-2 ">
            
              <span>ID : * * * * * * * *</span>
              <span>DOB : * * * * - * * - * *</span>
              
              <span>LOCATION : LA County, CA</span>
            </div>

          </div>
          
          <div className="absolute top-24 left-0 w-44 max-width-768px-width-full flex flex-col  items-center p-4 border-l-2 border-red-700 border-opacity-40 
          bg-black bg-opacity-25">
            
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed"> 
              I'M A <span className="text-green-300">FULL-STACK DEVELOPER</span> WITH AN EYE FOR DESIGN.
              MY FOCUS IS ON CREATING RESPONSIVE LAYOUTS AND CRAFTING EASY TO READ & EFFICIENT CODE TO THE BEST OF MY ABILITY.
              ALWAYS BUILDING, ALWAYS LEARNING.
            </div>
          </div>

          
          <div className="absolute top-1/2  left-0 w-44 max-width-768px-width-full  items-center p-4 
          bg-black bg-opacity-25 
          border-l-2 border-red-700 border-opacity-40">
            
            <div className="flex flex-wrap justify-evenly  gap-y-2 gap-x-2 "> 
              {
                toolsElements.map(tools =>(
                  <div className='flex flex-col items-center gap-y-1 text-white font-black-outline-light col text-xs'>
                    {tools.jsx}
                  </div>
                ))
              }
            </div>
          </div>

          
          <div className="absolute  bottom-0 left-0   flex flex-col  items-center pl-2 pr-2 border-l-2 border-red-700 border-opacity-40 
          bg-black bg-opacity-25">
            
            <div className="flex gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed w-fit"> 
              <span>Github:</span> <a className="text-green-300" href="https://github.com/sycodes95" target="_blank">https://github.com/sycodes95</a>
            </div>
          </div>

          <img className="SILHOUTTE " src={silhoutte}/>

        </div>

        

      </div>
     

    </section>

  )
}

export default AboutSection;