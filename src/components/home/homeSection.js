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

  const arrowRef = useRef(null)

  const homeIntroRefs = useRef([])

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

  return (
    <section className="">
      <div className="relative flex justify-center items-center min-h-screen w-full ">
        
        <section className="
        flex flex-col items-center h-full w-full home-text overflow-hidden pt-32 pb-32
         " >
          
          <div className="flex w-4/5 h-fit transition-all duration-200 " >

            <div className="flex gap-0 justify-center text-gray-300 text-opacity-60 
            transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              
              {
              kevin.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
              
            </div>
            <div className="flex gap-0 text-gray-300 text-opacity-0 transition-all duration-300 font-gray-outline" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              kim.map((char, index) => (
                <span className="hover:text-gray-400 hover:text-opacity-50 transition-colors cursor-default">{char}</span>
              ))
              }
            </div>
            <div className="text-gray-400 pl-8">/</div>
          </div>
          <div id="fullstack" className="flex w-4/5  transition-all duration-300"  >
            <div id="fullstack" className="flex gap-0 justify-center text-gray-300 text-opacity-60 transition-all duration-300" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              fullstack.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
            </div>
            <div id="fullstack" className="flex text-gray-300 text-opacity-0 transition-all duration-300 font-gray-outline" 
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              developer.map((char, index) => (
                <span className="hover:text-gray-400 hover:text-opacity-50 transition-colors cursor-default">{char}</span>
              ))
              }
            </div>
            <div className="text-gray-300">.</div>
          </div>
        </section>

        <section className="absolute bottom-24">
          <button className="text-white flex flex-col items-center w-full hover:text-gray-400 transition-all duration-300"
          onClick={scrollToProjects}>
            <p>VIEW PROJECTS</p>
            <div className="flex justify-center">
              <Icon className="flex w-full" path={mdiChevronDown} size={1} />
            </div>
            
          </button>
        </section>

      </div>

    </section>
  );
}

export default HomeSection;
