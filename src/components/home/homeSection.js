import { useRef, useEffect, useState } from "react";
import bulb from '../../images/bulb.png'
import windowLight from '../../images/windowlight.png'
import downArrow from '../../icons/down-arrow.svg'
import smokebot from '../../images/smokebot.png'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


import { ReactSVG } from "react-svg";

function HomeSection(props) {

  const projectsRef = props.projectsRef

  const bulbRef = useRef(null);

  const introRef = useRef(null)

  const arrowRef = useRef(null)

  const homeIntroRefs = useRef([])

  const [scrollPosition, setScrollPosition] = useState(0)

  const kevin = ['K', 'E', 'V', 'I', 'N']
  const kim = ['K', 'I', 'M']
  const fullstack = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K']
  const developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(()=>{
    let prevScroll = 0;
    let pixels = 0;

    const handleScroll = () =>{
      
      if(homeIntroRefs.current.length){
        
        if(prevScroll < window.scrollY){
          pixels += 0.02
        } else {
          pixels -= 0.02
        }
        if (window.scrollY === 0) {
          pixels = 0; 
        }
        homeIntroRefs.current.forEach(ref => {
          let half = pixels / 4
          console.log(ref.id);
          if(ref.id === 'fullstack'){
            console.log('iddd');
            ref.style.columnGap = half + 'vw'
          } else {
            ref.style.columnGap = pixels + 'vw'
          }
        })
        prevScroll = window.scrollY
      }
      
    }
    
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  // const handleMouseMove = (event) => {
  //   const x = event.clientX;
  //   const y = event.clientY;
    
  //   bulbRef.current.style.marginLeft = `${x / 50}px`;
  //   bulbRef.current.style.marginTop = `${y / 50}px`;
  // };

  // useEffect(() => {
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   bulbRef.current.classList.add('TOP-BULB')
  //   bulbRef.current.classList.remove('-top-3/4')
  // }, []);

  

  
  
  return (
    <section className="content-con max-h-screen w-full corners overflow-x-hidden">
      <div id="" className="absolute top-0 w-full h-1 border-glow-emerald-long z-50"></div>
      <div className="HOME-SCREEN relative flex justify-center items-center h-screen w-full ">
        {/* <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden ">
          <img
            className="absolute -top-3/4 pointer-events-none BULB"
            src={bulb}
            ref={bulbRef}
            alt=''
          />
        </div> */}
        
        <section>
          
        </section>
        <section className="
        absolute flex flex-col justify-center items-center h-full w-full home-text 
         break-word  font-bold" >
          
          <div className="flex w-4/5 h-fit transition-all duration-200 gap-0"ref={ref => homeIntroRefs.current.push(ref)} >

            <div className="flex gap-0 justify-center text-gray-300 transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              
              {
              kevin.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
            </div>
            <div className="flex gap-0 text-black text-opacity-0 font-yellow-outline transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              kim.map((char, index) => (
                <span className="hover:text-green-400 hover:text-opacity-30 transition-colors cursor-default">{char}</span>
              ))
              }
            </div>
            <div className="text-gray-300 pl-8">/</div>
          </div>
          <div id="fullstack" className="flex w-4/5 gap-0 transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)} >
            <div id="fullstack" className="flex gap-0 justify-center text-gray-300 transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              fullstack.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
            </div>
            <div id="fullstack" className="flex text-black text-opacity-0 font-yellow-outline transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              developer.map((char, index) => (
                <span className="hover:text-green-400 hover:text-opacity-30 transition-colors cursor-default">{char}</span>
              ))
              }
            </div>
            <div className="text-gray-300">.</div>
          </div>
        </section>

        <div className='absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 p-2 bg-opacity-25   
        text-white text-xs z-20 flex justify-center ARROW-CONTAINER'>
          
          <button className='flex flex-col justify-center items-center 
          text-yellow-700 hover:text-yellow-600  text-opacity-50 opacity-0 delay-500 duration-1000 
          rounded-md'
          onClick={scrollToProjects} ref={arrowRef}>
            <Icon   path={mdiChevronDown} size={2} />
            <Icon  path={mdiChevronDown} size={2} />
            <Icon  path={mdiChevronDown} size={2} />
          </button>
          
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
