
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import silhoutte from "../../images/silhoutte.png"
import Icon from '@mdi/react';
import { mdiDna , mdiCardAccountDetailsOutline, mdiFileDocumentOutline} from '@mdi/js';
import { useState, useEffect, useRef } from "react";
import embers from "../../images/embers.png"
import cartoonlight from "../../images/cartoonlight.png"
import americanflag from "../../images/american-flag.png"
import whitelight from "../../images/white-light-bit.png"




function AboutSection () {

  const [mobileTab, setMobileTab] = useState({
    tab: 'SUMMARY',
    
  })

  const aboutRepeat = Array.from({ length: 300 }, () => 'ABOUT-');

  const aboutRepeatRef = useRef(null)

  const aboutSectionRef = useRef(null)
  const aboutContentRef = useRef(null)
  const aboutHeaderRef = useRef(null)
  const aboutSideLeftRef = useRef(null)
  const aboutSideRightRef = useRef(null)
  const aboutSilhoutteRef = useRef(null)
  const aboutContainerRef = useRef(null)

  const aboutTitleA = useRef(null)
  const aboutTitleB = useRef(null)
  const aboutTitleO = useRef(null)
  const aboutTitleU = useRef(null)
  const aboutTitleT = useRef(null)

  const bannerLineRef = useRef(null)

  const aboutIconRef = useRef([]);

  
  

  const handleMobileTab = (e) => {
    if(e.target.textContent === 'SUMMARY'){
      setMobileTab({
        tab: 'SUMMARY'
      })
    }
    if(e.target.textContent === 'SKILLS'){
      setMobileTab({
        tab: 'SKILLS'
      })
    }
  }

  const toolsElements = [
    {
      jsx: <i className="text-lg fill-current devicon-javascript-plain"></i>,
      name: 'Javascript'
    },
    {
      jsx: <i className="text-lg fill-current devicon-typescript-plain"></i>,
      name: 'Typescript'
    },
    {
      jsx: <i className="text-lg fill-current devicon-react-original "></i>,
      name: 'React'
    },
    {
      jsx: <i className="text-lg fill-current devicon-redux-original"></i>,
      name: 'Redux'
    },
    {
      jsx: <i className="text-lg fill-current devicon-tailwindcss-plain "></i>,
      name: 'Tailwind'
    },
    {
      jsx: <i className="text-lg fill-current devicon-nodejs-plain "></i>,
      name: 'Node JS'
    },
    {
      jsx: <i className="text-lg fill-current devicon-express-original "></i>,
      name: 'Express'
    },
    {
      jsx: <i className="text-lg fill-current devicon-postgresql-plain-wordmark "></i>,
      name: 'PostgreSQL'
    },
    {
      jsx: <i className="text-lg fill-current devicon-mongodb-plain-wordmark "></i>,
      name: 'Mongo DB'
    },
    {
      jsx: <i className="text-lg fill-current devicon-git-plain"></i>,
      name: 'Git'
    },
    {
      jsx: <i className="text-lg fill-current devicon-github-original"></i>,
      name: 'Github'
    },
    
  ]

  

  
  

  useEffect(()=>{
    let prevScroll = 0;
    let percentage = 0;

    const handleScroll = () =>{
        
      if(prevScroll < window.scrollY){
        percentage += 0.25
      } else {
        percentage -= 0.25
      }
      if (window.scrollY === 0) {
        percentage = 0; 
      }

      aboutRepeatRef.current.style.left = percentage + '%'
      
      prevScroll = window.scrollY
      
    }
    
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  

  return (
    <div className='relative flex flex-col w-full max-w-xl gap-16 pt-12 width-768px-90pct' ref={aboutSectionRef}>
      
      <div>
        <div className="relative z-10 flex justify-center w-full" >
          
          {/* <Icon className="text-white transition-all duration-1000 delay-500 rounded-full " 
          path={mdiHammerWrench} size={2} ref={ref => projectIconRef.current[1] = ref}/> */}
          
          <div className="absolute top-0 z-40 flex">
          <p className="text-6xl font-bold text-green-400">_</p>
            <p className="text-6xl font-bold text-white text-opacity-0 font-white-outline">about</p>
            <p className="text-6xl font-bold text-green-400">_</p>
          </div>
          <div className="flex text-white ">
            <p className="text-5xl font-bold text-white ">about</p>
          </div>
          
          
          
        </div> 
      </div>


      <div className="relative flex justify-center w-full overflow-visible text-white">
        
        <section className="z-40 flex justify-center invert opacity-30">
          <img className=" w-80" src={silhoutte} alt="silhoutte of man"/>
        </section>

        <section className="absolute flex flex-col w-full gap-4">

          <div className="flex justify-between gap-12">
            <div className="relative flex items-center justify-between w-3/4 p-4 text-sm text-white bg-black bg-opacity-30 left-trap-clip"> 
              <section className="relative flex flex-col justify-center gap-2 p-2 border-4 border-green-400 rounded-sm">
                <Icon path={mdiDna} size={1.6} />
                
              </section>
              
            </div>

            <div className="relative flex items-center justify-end w-3/4 p-4 text-sm text-white bg-black bg-opacity-30 right-trap-clip"> 
              <section className="flex flex-col items-end gap-2">

                <a className="flex items-center gap-2 p-1 text-green-400 transition-all duration-300 hover:text-gray-400" href="https://drive.google.com/file/d/1U4K3tvlx0SibXKBSvG4fUq8StlV9MInh/view?usp=sharing" target="_blank">
                  <Icon path={mdiFileDocumentOutline} size={0.8} />
                  <p>Resume</p>
                </a>

                <a className="flex items-center justify-center gap-2 text-green-400 transition-all duration-300 hover:text-gray-400" href="https://github.com/sycodes95" target="_blank">
                  <i class="devicon-github-original text-lg " ></i>
                  <p>Github</p>
                </a>
                
              </section>
            </div>
          </div>
          
          <div className="flex justify-between">
            
            <div className="relative flex flex-col gap-1 p-4 text-white w-fit font-1vw "> 
              <div className="flex text-2xl text-white text-opacity-0 font-family-field-exoplane font-green-outline">Skills</div>
              
              {
              toolsElements.map((tool, index) => (
                <div className="flex items-center gap-2 whitespace-nowrap" key={index}>
                  <p className="">{tool.jsx}</p>
                  <p className="font-black-outline">{tool.name}</p>
                </div>
              ))
              }
            </div>

            <div className="relative flex flex-col w-40 gap-2 p-4 text-white font-1vw "> 
              
              <div className="text-2xl text-right text-white text-opacity-0 font-family-field-exoplane font-green-outline">Who Am I ?</div>
              <div className="text-right font-black-outline">
              "I am a <span className="text-green-300">Web Developer</span> with an eye for design.
              I love crafting responsive layouts and writing clean code.
              Along with my core development skills,
              I have a deep passion for working with data and using it to create meaningful visualizations that convey insights in an engaging way."
              </div>
            </div>

          </div>
          
        </section>

      </div>

      

    </div>

  )
}

export default AboutSection;

{/* <div className="text-xs leading-relaxed text-center text-white gap-y-2 gap-x-2 font-black-outline-light"> 

  I am a <span className="text-green-300">Full-Stack Developer</span> with an eye for design.
  I take pride in crafting responsive layouts and writing efficient, easy-to-read code.
  Along with my core development skills,
  I have a deep passion for working with data and using it to create meaningful visualizations that convey insights in an engaging way.
  
</div> */}


//<Icon path={mdiCardAccountDetailsOutline} size={2} />