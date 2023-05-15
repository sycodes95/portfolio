
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
      jsx: <i className="devicon-javascript-plain text-4xl  fill-current"></i>,
      name: 'Javascript'
    },
    {
      jsx: <i className="devicon-react-original text-4xl  fill-current "></i>,
      name: 'React'
    },
    {
      jsx: <i className="devicon-tailwindcss-plain text-4xl  fill-current "></i>,
      name: 'Tailwind'
    },
    {
      jsx: <i className="devicon-nodejs-plain text-4xl  fill-current "></i>,
      name: 'Node JS'
    },
    {
      jsx: <i className="devicon-express-original text-4xl  fill-current "></i>,
      name: 'Express'
    },
    {
      jsx: <i className="devicon-postgresql-plain-wordmark text-4xl  fill-current "></i>,
      name: 'PostgreSQL'
    },
    {
      jsx: <i className="devicon-mongodb-plain-wordmark text-4xl  fill-current "></i>,
      name: 'Mongo DB'
    },
    {
      jsx: <i className="devicon-git-plain text-4xl  fill-current"></i>,
      name: 'Git'
    },
    {
      jsx: <i className="devicon-github-original text-4xl  fill-current"></i>,
      name: 'Github'
    },
  ]

  useEffect(()=> {
    
    if(window.innerWidth < 768 && mobileTab.tab === 'SUMMARY'){
      aboutSideLeftRef.current.classList.remove('max-width-768px-neg-top-full')
      aboutSideRightRef.current.classList.add('max-width-768px-neg-top-full')
    }
    if(window.innerWidth < 768 && mobileTab.tab === 'SKILLS'){
      aboutSideLeftRef.current.classList.add('max-width-768px-neg-top-full')
      aboutSideRightRef.current.classList.remove('max-width-768px-neg-top-full')
    }
  },[mobileTab.tab])

  
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
          aboutHeaderRef.current.classList.add('top-0')
          aboutHeaderRef.current.classList.remove('-top-16');

          aboutSideLeftRef.current.classList.add('left-0')
          aboutSideLeftRef.current.classList.remove('-left-56');

          aboutSideRightRef.current.classList.add('right-0')
          aboutSideRightRef.current.classList.remove('-right-56');
          
          aboutSilhoutteRef.current.classList.add('opacity-100')
          aboutSilhoutteRef.current.classList.remove('opacity-0')

          aboutContainerRef.current.classList.add('opacity-100')
          aboutContainerRef.current.classList.remove('opacity-0')

          bannerLineRef.current.classList.add('h-10')

          bannerLineRef.current.classList.remove('h-0')

          aboutIconRef.current.forEach(ref => {
            ref.classList.add('opacity-100')
            ref.classList.remove('opacity-0')
          })

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
    <div className='ABOUT-SECTION  w-full pb-24 pt-12 gap-y-16 flex flex-col bg-dna-big relative' ref={aboutSectionRef}>
      
      <section>
        <div className="relative flex justify-center w-full z-10 " >
          <Icon className=" text-gray-300  transition-all delay-500 duration-1000  rounded-full" 
          path={mdiDna} size={3.2}/>
        </div> 
      </section>

      <section className="relative flex justify-center items-center 
      rounded-sm transition-all duration-1000" ref={bannerLineRef}>
        <div className="absolute left-0 -translate-x-1/2 flex items-center w-fit text-gray-300 text-opacity-60 text-8xl font-thin font-family-field-gothic
        overflow-hidden whitespace-nowrap transition-all duration-300" ref={aboutRepeatRef}>
          {
          aboutRepeat.map((str, index) => (
            <p key={index}>{str}</p>
          ))
          }
        </div>
      </section>

      <section className="w-full flex justify-center">
        
      <div className="flex w-full relative overflow-hidden max-width-768px-overflow-visible 
      justify-center mt-10 z-10 opacity-0 transition-all delay-200 duration-1000 max-height-screen-10 " ref={aboutContainerRef}>
        
        <div className="ABOUT-CONTAINER relative flex justify-center p-2 bg-black bg-opacity-25 border-glow-white rounded-xl
        border-4 border-opacity-50 border-black bg-dna -top-full transition-all  w-2/5 max-width-1440px-w-50pct
        max-width-1200px-w-60pct max-width-768px-width-full z-10 overflow-hidden" ref={aboutContentRef}>
          
          <section className="absolute -top-16 h-16 w-full bg-striped-dark-alt transition-all delay-500 duration-1000" ref={aboutHeaderRef}>

            <div className="absolute -top-0 right-0 h-full
            text-white text-opacity-70 text-4xl font-bold font-black-outline-light flex justify-center items-center p-4">
              <Icon path={mdiCardAccountDetailsOutline} size={2} />
            </div>
            <div className="absolute flex flex-col top-0 left-0 h-16 text-white text-xs font-bold font-black-outline-light p-2 ">
            
              <span>ID : * * * * * * * *</span>
              <span>DOB : * * * * - * * - * *</span>
              
              <span>LOCATION : LA County, CA</span>
            </div>

          </section>
          
          <section className="absolute top-1/2 -translate-y-1/2 -left-56 w-56 max-width-768px-width-full flex flex-col  items-center p-4 
          border-l-4 border-white border-opacity-40 bg-black bg-opacity-25 gap-y-4
          transition-all delay-500 duration-1000 " ref={aboutSideLeftRef}>

            <div className="text-white text-md border-b w-full flex justify-center">SUMMARY</div>
            
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-black-outline-light leading-relaxed text-center"> 

              I am a <span className="text-green-300">Full-Stack Developer</span> with an eye for design.
              I take pride in crafting responsive layouts and writing efficient, easy-to-read code.
              Along with my core development skills,
              I have a deep passion for working with data and using it to create meaningful visualizations that convey insights in an engaging way.
              
            </div>

            
          </section>


          <section className="absolute top-1/2 -translate-y-1/2 -right-56 w-56  flex flex-col  items-center p-4 
          border-r-4 border-white border-opacity-40 bg-black bg-opacity-25 gap-y-4
          transition-all delay-500 duration-1000 max-width-768px-width-full max-width-768px-neg-top-full " ref={aboutSideRightRef}>

            <div className="text-white text-md border-b w-full flex justify-center">SKILLS</div>

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
                        
            
            
          </section>

          <section className="absolute bottom-0 -left-56 text-white border-l-4 border-gray-600 border-opacity-50 
          flex justify-evenly p-2 gap-2 bg-black bg-opacity-30 w-56 max-width-768px-left-0 transition-all duration-1000
          "> 
            <button className={`z-10 rounded-sm  bg-opacity-50 text-white p-1 w-full border border-gray-500 border-opacity-0 hover:border-opacity-100
            ${mobileTab.tab === 'SUMMARY' && 'bg-gray-500'}`} onClick={handleMobileTab}>SUMMARY</button>
            <button className={`z-10 rounded-sm  bg-opacity-50 text-white p-1 w-full border border-gray-500 border-opacity-0 hover:border-opacity-100
            ${mobileTab.tab === 'SKILLS' && 'bg-gray-500'}`} onClick={handleMobileTab}>SKILLS</button>
          </section>

          
          
          
          
          <img className="SILHOUTTE invert opacity-40 select-none h-96" src={silhoutte} ref={aboutSilhoutteRef}/>
          
        
        </div>
        
      </div>
      </section>

    </div>

  )
}

export default AboutSection;