import { useRef, useEffect } from "react";
import bulb from '../../images/bulb.png'
import dust from '../../images/dust.png'
import windowLight from '../../images/windowlight.png'
import downArrow from '../../icons/down-arrow.svg'
import topographic from '../../images/topographic.png'
import smokebot from '../../images/smokebot.png'
import { ReactSVG } from "react-svg";
import SmokeEffect from "../smoke/smoke";

function HomeSection(props) {

  const projectsRef = props.projectsRef

  const bulbRef = useRef(null);

  const introRef = useRef(null)

  const windowRef = useRef(null)

  const arrowRef = useRef(null)

  const smokeRef = useRef(null)

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    
    bulbRef.current.style.marginLeft = `${x / 50}px`;
    bulbRef.current.style.marginTop = `${y / 50}px`;
  };

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    bulbRef.current.classList.add('TOP-BULB')
    bulbRef.current.classList.remove('-top-3/4')
  }, []);

  useEffect(() => {
    introRef.current.classList.add('opacity-100')
    introRef.current.classList.remove('opacity-0')
  }, []);

  useEffect(() => {
    windowRef.current.classList.add('opacity-100')
    windowRef.current.classList.remove('opacity-0')
  }, []);

  useEffect(() => {
    arrowRef.current.classList.add('opacity-100')
    arrowRef.current.classList.remove('opacity-0')
    
  }, []);

  useEffect(() => {
    smokeRef.current.classList.add('opacity-10')
    smokeRef.current.classList.remove('opacity-0')
    
    
  }, []);

  
  return (
    <section className="content-con max-h-screen w-full corners">
      
      <div className="HOME-SCREEN relative flex justify-center items-center h-screen w-full ">
        
        
        <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden ">
          <img
            className="absolute -top-3/4 pointer-events-none BULB"
            src={bulb}
            ref={bulbRef}
            alt=''
          />
        </div>

        <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden ">
          <img
            className="absolute right-0 pointer-events-none WINDOW opacity-0 transition-all delay-500 duration-1000"
            src={windowLight}
            ref={windowRef}
            alt=''
          />
        </div>

        <div className="absolute h-full w-full max-w-full flex justify-center overflow-visible z-0">
          <img
            className="absolute w-full rotate-180 pointer-events-none  transition-all delay-500 duration-1000 opacity-0 z-50"
            src={smokebot}
            ref={smokeRef}
            alt=''
            
          />
        </div>

        

        <div className="
        absolute left-2/4 -translate-x-1/2 
        p-2 
        border-2 border-red-800 border-opacity-30
        shadow-lg
        bg-black bg-opacity-25 
        rounded-sm min-w-max
        flex justify-center flex-shrink
        opacity-0 transition-opacity delay-500 duration-1000
        z-10 border-glow-red
        "
        ref={introRef}
        >
          <div className="p-4 bg-striped-dark-alt bg-opacity-10 flex flex-col items-end gap-x-2">
            
            <span className="text-white text-opacity-75 font-bg-gradient font-bold text-5xl INTRO-NAME" >
              KEVIN KIM
            </span>
            <div className="w-full h-full  flex justify-center items-end">
              <span className="text-center h-fit w-full items-end text-red-800 text-opacity-70 text-xl font-thin INTRO-DEV " >
                Fullstack Developer
              </span>
            </div>
            
          </div>
          
        </div>

        <div className=' 
        absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2  
        p-2 
        bg-opacity-25 
        text-white text-xs
        
        z-20 
        flex justify-center
        ARROW-CONTAINER
        '>
          
          <button className='flex justify-center items-center 
          text-red-800 text-opacity-50 opacity-0 delay-500 duration-1000 
          rounded-sm bg-striped-dark-alt'
          onClick={scrollToProjects} ref={arrowRef}>
            <ReactSVG className='hover:text-white transition-colors w-full h-full p-2' src={downArrow}/>
          </button>
          
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
