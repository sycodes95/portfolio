import { useRef, useEffect } from "react";
import bulb from '../images/bulb.png'
import dust from '../images/dust.png'
import windowLight from '../images/windowlight.png'
import downArrow from '../icons/down-arrow.svg'

import { ReactSVG } from "react-svg";

function HomeSection(props) {

  const projectsRef = props.projectsRef

  const bulbRef = useRef(null);

  const introRef = useRef(null)

  const windowRef = useRef(null)

  const arrowRef = useRef(null)

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x);
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

  
  return (
    <section className="content-con max-h-screen w-full grid corners">

      <div className="HOME-SCREEN relative flex justify-center items-center h-screen w-full ">

        <div className="absolute right-40 h-full w-full max-w-full flex justify-center overflow-hidden ">
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

        

        <div className="
        absolute left-2/4 -translate-x-1/2 
        p-2 
         border-opacity-50
        bg-black bg-opacity-25 shadow-lg
        rounded-sm min-w-max
        flex justify-center flex-shrink
        opacity-0 transition-opacity delay-500 duration-1000
        "
        ref={introRef}
        >
          <div className=" p-2 bg-black bg-opacity-10 flex flex-col items-end gap-x-2">
            
            <span className="text-white text-opacity-75 font-bg-gradient font-bold text-5xl INTRO-NAME" >
              Kevin Kim
            </span>
            <div className="w-full flex justify-center">
              <span className="text-center w-full items-end text-red-700 text-opacity-70 text-xl font-bold INTRO-DEV " >
                Fullstack Developer.
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
          text-white text-opacity-50 opacity-0 delay-500 duration-1000 
          rounded-full bg-black bg-opacity-25 p-2 '
          onClick={scrollToProjects} ref={arrowRef}>
            <ReactSVG className=' ' src={downArrow}/>
          </button>
          
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
