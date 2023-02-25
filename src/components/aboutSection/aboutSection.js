
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import silhoutte from "../../images/silhoutte.png"
import Icon from '@mdi/react';
import { mdiDna } from '@mdi/js';
import { useState, useEffect, useRef } from "react";



<Icon path={mdiDna} size={1} />

function AboutSection () {
  const useObserver = useRef(true);

  const aboutSectionRef = useState(null)
  const aboutContentRef = useState(null)
  
  const toolsElements = [
    {
      jsx: <i class="devicon-javascript-plain text-4xl  fill-current "></i>,
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
      jsx: <i class="devicon-git-plain text-4xl  fill-current"></i>,
      name: 'Git'
    },

    {
      jsx: <i class="devicon-github-original text-4xl  fill-current"></i>,
      name: 'Github'
    },
  ]


  useEffect(() => {
    if(aboutSectionRef.current) {
      

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
      
      
      
      
      // Clean up the observer when the component unmounts
      return () => observer.unobserve(aboutSectionRef.current);

    }
    
  }, []);
  

  return (
    <section className='ABOUT-SECTION pb-96 pt-12 gap-y-12' ref={aboutSectionRef}>

      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4
       rounded-sm h-12">
        
        <div className="ICON-CONTAINER
         bg-black bg-opacity-25 bg-striped
         h-full w-full 
         flex items-center 
         border-2 border-black ">
          <div className="flex justify-start ml-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md" path={mdiDna} size={1.5} />
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-red-700 text-opacity-70 text-xl">
            <span>A B O U T</span>
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md flip" path={mdiDna} size={1.5} />
          </div>
          
          
        </div>
        
        
      </div>

      <div className=" ABOUT
      grid grid-cols-2 
      bg-black bg-opacity-25
      relative overflow-hidden
      " >

        <div className="
        col-span-2 
        m-2 p-2
      bg-black bg-opacity-25  
        flex justify-center 
        border-8 border-opacity-50 border-black
        relative bg-dna
        -top-full transition-all duration-700" ref={aboutContentRef}>
          <div className="ABOUT-BANNER absolute top-0 h-16 w-full bg-black bg-opacity-40">
            <div className="absolute
            top-0 right-0
          bg-black bg-opacity-40 
            h-16
          text-white text-4xl font-bold font-black-outline-light
            flex justify-center items-center p-4">

              <span>95'</span>
            </div>
            <div className="absolute
            top-0 
            left-0
          
            h-16
          text-white text-xs font-bold font-black-outline-light
            flex flex-col  p-2 ">
              <span>ID : * * * * * * * *</span>
              <span>DOB : * * * * - * * - * *</span>
              
              <span>LOCATION : LA County, CA</span>
            </div>

          </div>
          
          <div className="absolute top-24 right-0 w-fit flex flex-col  items-center p-4 bg-black bg-opacity-40">
            <div className="text-md font-bold text-white bg-black bg-opacity-25 pb-2 border-b w-full text-center text-orange-300">
              SKILLS
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-2 mt-6"> 
              {
                toolsElements.map(tools =>(
                  <div className='flex flex-col items-center gap-y-1 text-white font-black-outline-light col text-xs'>
                    {tools.jsx}
                    <span>{tools.name}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="absolute top-24 left-0  w-44 flex flex-col  items-center p-4 bg-black bg-opacity-40">
            <div className="text-md font-bold text-white pb-2 border-b w-full text-center text-orange-300 text-opacity-70">
              BIO
            </div>
            <div className=" gap-y-2 gap-x-2 mt-6 text-white text-xs font-black-outline-light leading-relaxed"> 
              I'M A FULL-STACK DEVELOPER WITH AN EYE FOR DESIGN, I UNDERSTAND THAT GOOD DESIGN DOESN'T JUST LOOK GOOD, IT ALSO BUILDS TRUST.
              MY FOCUS IS ON CREATING RESPONSIVE LAYOUTS AND CRAFTING EASY TO READ & EFFICIENT CODE TO THE BEST OF MY ABILITY.
              ALWAYS BUILDING, ALWAYS LEARNING.
            </div>
          </div>

          <img className="SILHOUTTE " src={silhoutte}/>

        </div>

        

      </div>
     

    </section>

  )
}

export default AboutSection;