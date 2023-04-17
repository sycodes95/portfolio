
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
    tab: 'GENERAL',
    
  })
  const useObserver = useRef(true);

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
    if(e.target.textContent === 'GENERAL'){
      setMobileTab({
        tab: 'GENERAL'
      })
    }
    if(e.target.textContent === 'WHOAMI?'){
      setMobileTab({
        tab: 'WHOAMI?'
      })
    }
  }

  const toolsElements = [
    {
      jsx: <i class="devicon-javascript-plain text-4xl  fill-current"></i>,
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

  useEffect(()=> {
    
    if(window.innerWidth < 768 && mobileTab.tab === 'GENERAL'){
      aboutSideLeftRef.current.classList.remove('max-width-768px-neg-top-full')
      aboutSideRightRef.current.classList.add('max-width-768px-neg-top-full')
    }
    if(window.innerWidth < 768 && mobileTab.tab === 'WHOAMI?'){
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
          console.log('intersect');
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
            <Icon className=" text-black opacity-0 transition-all delay-500 duration-1000" 
            path={mdiDna} size={1.5} ref={ref => aboutIconRef.current[0] = ref}/>
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
            <Icon className="text-black opacity-0 transition-all delay-500 duration-1000 flip" 
            path={mdiDna} size={1.5} ref={ref => aboutIconRef.current[1] = ref}/>
          </div>
          
        </div>
        
      </div> 

      <div className="ABOUT-CONTAINER flex relative overflow-hidden max-width-768px-overflow-visible 
      justify-center mt-10 z-10 opacity-0 transition-all delay-200 duration-1000 max-height-screen-10" ref={aboutContainerRef}>
        
        <div className="relative flex justify-center p-2 bg-black bg-opacity-25 border-glow-emerald
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
            
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed text-center"> 

              I AM A <span className="text-green-300">FULL-STACK DEVELOPER</span> WITH AN EYE FOR DESIGN.
              I TAKE PRIDE IN CRAFTING RESPONSIVE LAYOUTS AND WRITING EFFICIENT, EASY-TO-READ CODE.
              ALONG WITH MY CORE DEVELOPMENT SKILLS,
              I HAVE A DEEP PASSION FOR WORKING WITH DATA AND USING IT TO CREATE MEANINGFUL VISUALIZATIONS THAT CONVEY INSIGHTS IN AN ENGAGING WAY.
              
            </div>

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


          <section className="absolute top-1/2 -translate-y-1/2 -right-56 w-56  flex flex-col  items-center p-4 
          border-r-4 border-white border-opacity-40 bg-black bg-opacity-25 gap-y-4
          transition-all delay-500 duration-1000 max-width-768px-width-full max-width-768px-neg-top-full " ref={aboutSideRightRef}>

            <div className="text-white text-md border-b w-full flex justify-center">WHO AM I </div>

            
            <div className=" gap-y-2 gap-x-2  text-white text-xs font-bold font-black-outline-light leading-relaxed text-center"> 

              <p>
              I BELIEVE THAT SELF-REFLECTION IS CRUCIAL FOR PERSONAL AND PROFESSIONAL GROWTH. THROUGH SELF-ANALYSIS, I'VE LEARNED TO IDENTIFY MY STRENGTHS AND WEAKNESSES, AND USE THEM TO MY ADVANTAGE. FOR EXAMPLE, I'VE DISCOVERED THAT I HAVE A TENDENCY TO BECOME FRUSTRATED WHEN FACED WITH DIFFICULT PROBLEMS. HOWEVER, I'VE ALSO LEARNED THAT THIS FRUSTRATION CAN BE A SOURCE OF MOTIVATION FOR ME. INSTEAD OF GIVING UP
              OR BEING DISCOURAGED, I USE MY FRUSTRATION AS A CATALYST TO KEEP PUSHING FORWARD AGGRESIVELY UNTIL I FIND A SOLUTION. BY CONTINUALLY ANALYZING MY THOUGHTS, FEELINGS, AND SUBCONSCIOUS TENDENCIES, I'M ABLE TO IDENTIFY AREAS WHERE I CAN IMPROVE, AND FIND WAYS TO TURN WEAKNESS INTO STRENGTH.
                
              </p>
              {
              /*
              <p>WHEN I'M NOT BUSY CODING, I LIKE TO PUNISH MYSELF WITH A GOOD OL' RUN AND SOME TORTUROUS BODY WEIGHT EXERCISES. 
              HONESTLY, I HATE DOING IT, BUT I'M DETERMINED TO KEEP UP THE CHARADE OF BEING A HEALTHY AND ACTIVE PERSON.
              </p>
              <p>
              WHEN I'M FEELING ESPECIALLY LAZY, I'LL FIRE UP STEAM AND DIVE INTO THE WORLD OF ROCKET LEAGUE, 
              WHERE I HOLD THE RANK OF GRAND CHAMPION.
              BECAUSE WHAT BETTER WAY TO OFFSET MY SEDENTARY CODING LIFESTYLE THAN WITH ADDITIONAL HOURS OF SITTING AND STARING AT A SCREEN, AM I RIGHT?
              </p>
              <p>
              OCASSIONALLY, I LIKE TO WATCH THE UFC WHEN THE CARD LOOKS AMAZING, AS WELL AS THE PREMIER LEAGUE BECAUSE LET'S BE HONEST, WHO ACTUALLY WATCHES THE MLS?
              </p>
              */
              }



            
                          
            </div>
            
            
            
          </section>

          <section className="absolute bottom-0 -left-56 text-white border-l-4 border-red-600 border-opacity-50 
          flex justify-evenly p-2 gap-2 bg-black bg-opacity-30 w-56 max-width-768px-left-0 transition-all duration-1000
          "> 
            <button className={`rounded-sm  bg-opacity-50 text-white p-1 w-full border border-slate-500 border-opacity-0 hover:border-opacity-100
            ${mobileTab.tab === 'GENERAL' && 'bg-slate-500'}`} onClick={handleMobileTab}>GENERAL</button>
            <button className={`rounded-sm  bg-opacity-50 text-white p-1 w-full border border-slate-500 border-opacity-0 hover:border-opacity-100
            ${mobileTab.tab === 'WHOAMI?' && 'bg-slate-500'}`} onClick={handleMobileTab}>WHOAMI?</button>
          </section>

          
          
          
          <img className="SILHOUTTE " src={silhoutte} ref={aboutSilhoutteRef}/>
          
        
        </div>
        
      </div>

    </section>

  )
}

export default AboutSection;