
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import silhoutte from "../../images/silhoutte.png"
import Icon from '@mdi/react';
import { mdiDna , mdiCardAccountDetailsOutline} from '@mdi/js';
import { useState, useEffect, useRef } from "react";
import embers from "../../images/embers.png"
import cartoonlight from "../../images/cartoonlight.png"
import americanflag from "../../images/american-flag.png"





function AboutSection () {
  const useObserver = useRef(true);

  const aboutSectionRef = useRef(null)
  const aboutContentRef = useRef(null)
  const aboutHeaderRef = useRef(null)
  const aboutSideRef = useRef(null)
  const aboutSilhoutteRef = useRef(null)
  const aboutContainerRef = useRef(null)

  const aboutTitleA = useRef(null)
  const aboutTitleB = useRef(null)
  const aboutTitleO = useRef(null)
  const aboutTitleU = useRef(null)
  const aboutTitleT = useRef(null)

  const bannerLineRef = useRef(null)

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
      jsx: <i class="devicon-postgresql-plain-wordmark text-4xl  fill-current "></i>,
      name: 'PostgreSQL'
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
          console.log('intersect');
          aboutContentRef.current.classList.add('top-0');
          aboutContentRef.current.classList.remove('-top-full');
          aboutHeaderRef.current.classList.add('top-0')
          aboutHeaderRef.current.classList.remove('-top-16');

          aboutSideRef.current.classList.add('left-0')
          aboutSideRef.current.classList.remove('-left-44');
          
          aboutSilhoutteRef.current.classList.add('opacity-100')
          aboutSilhoutteRef.current.classList.remove('opacity-0')

          aboutContainerRef.current.classList.add('opacity-100')
          aboutContainerRef.current.classList.remove('opacity-0')

          bannerLineRef.current.classList.add('h-10')

          bannerLineRef.current.classList.remove('h-0')

          const aboutLettersArray = [
            aboutTitleA,
            aboutTitleB,
            aboutTitleO,
            aboutTitleU,
            aboutTitleT,
          ]

          aboutLettersArray.forEach(letter => {
            letter.current.classList.add('opacity-100');
            letter.current.classList.remove('opacity-0');
          })

        }
      });
    }, options);
    
    observer.observe(aboutSectionRef.current);
    
   
    
  }, []);
  

  return (
    <section className='ABOUT-SECTION pb-24 pt-12 flex flex-col  bg-dna-big relative' ref={aboutSectionRef}>
      

      <div className="ABOUT-TITLE-BANNER flex justify-center items-center mb-4 rounded-sm h-0 transition-all duration-1000" 
      ref={bannerLineRef}>
        
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
            <p className="opacity-0 transition-opacity delay-300 duration-75 " ref={aboutTitleA}>A</p>
            <p className="opacity-0 transition-opacity delay-300 duration-150" ref={aboutTitleB}>B</p>
            <p className="opacity-0 transition-opacity delay-300 duration-300" ref={aboutTitleO}>O</p>
            <p className="opacity-0 transition-opacity delay-300 duration-700" ref={aboutTitleU}>U</p>
            <p className="opacity-0 transition-opacity delay-300 duration-1000" ref={aboutTitleT}>T</p>
            
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className="text-black rounded-md" path={mdiDna} size={1.5} />
          </div>
          
        </div>
        
      </div> 

      <div className="ABOUT-CONTAINER flex relative overflow-hidden justify-center mt-10 z-10 opacity-0 transition-all delay-200 duration-1000" ref={aboutContainerRef}>
        
        <div className="relative flex justify-center p-2 bg-black bg-opacity-25 border-glow-emerald
        border-4 border-opacity-50 border-white bg-dna -top-full transition-all  w-2/5 max-width-1440px-w-50pct
        max-width-1200px-w-60pct max-width-768px-width-full z-10 overflow-hidden" ref={aboutContentRef}>
          
          <div className="absolute -top-16 h-16 w-full bg-striped-dark-alt transition-all delay-500 duration-1000" ref={aboutHeaderRef}>

            <div className="absolute -top-0 right-0 h-full
            text-white text-opacity-70 text-4xl font-bold font-black-outline-light flex justify-center items-center p-4">
              <Icon path={mdiCardAccountDetailsOutline} size={2} />
            </div>
            <div className="absolute flex flex-col top-0 left-0 h-16 text-white text-xs font-bold font-black-outline-light p-2 ">
            
              <span>ID : * * * * * * * *</span>
              <span>DOB : * * * * - * * - * *</span>
              
              <span>LOCATION : LA County, CA</span>
            </div>

          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-44 w-44 max-width-768px-width-full flex flex-col  items-center p-4 
          border-l-4 border-green-300 border-opacity-40 bg-black bg-opacity-25 gap-y-4
          transition-all delay-1000 duration-1000" ref={aboutSideRef}>
            
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed text-center"> 
              I'M A <span className="text-green-300">FULL-STACK DEVELOPER</span> WITH AN EYE FOR DESIGN.
              MY FOCUS IS ON CREATING RESPONSIVE LAYOUTS AND CRAFTING EASY TO READ & EFFICIENT CODE.
            </div>
            <div className="text-white text-md border-b w-full flex justify-center">TOOLS</div>
            <div className="grid grid-cols-3 justify-evenly  gap-y-2 gap-x-4 "> 
            
              {
                toolsElements.map(tools =>(
                  <div className='flex flex-col items-center gap-y-1 text-white font-black-outline-light col text-xs'>
                    {tools.jsx}
                  </div>
                ))
              }
            </div>
            <div className="text-white text-md border-b w-full flex justify-center">GITHUB</div>
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed text-center"> 
            <a className="text-green-300" href="https://github.com/sycodes95" target="_blank">https://github.com/sycodes95</a>
            </div>
          </div>
          

          <img className="SILHOUTTE " src={silhoutte} ref={aboutSilhoutteRef}/>
          
        
        </div>
        
      </div>

    </section>

  )
}

export default AboutSection;