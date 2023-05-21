import { useRef, useEffect, useState } from "react";
import bulb from '../../images/bulb.png'
import windowLight from '../../images/windowlight.png'
import downArrow from '../../icons/down-arrow.svg'
import smokebot from '../../images/smokebot.png'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


import { ReactSVG } from "react-svg";
import greendig from '../../background-images/green-teck.png'
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
          pixels += 0.01
        } else {
          pixels -= 0.01
        }
        if (window.scrollY === 0) {
          pixels = 0; 
        }
        homeIntroRefs.current.forEach(ref => {
          // let half = pixels / 4
          // if(ref.id === 'fullstack'){
          //   ref.style.columnGap = half + 'vw'
          // } else {
          //   ref.style.columnGap = pixels + 'vw'
          // }
          ref.style.columnGap = pixels + 'vw'
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
      <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
       

        <section className="absolute top-10 left-10">
          <div className="flex items-center p-4 text-white bg-green-400 rounded-sm home-text-xs">
            
          </div>
        </section>

        <section className="z-50 flex flex-col items-center w-full h-full pt-32 pb-32 overflow-hidden home-text" >
          
          <div className="flex justify-center w-full transition-all duration-200 h-fit home-text-big" ref={ref => homeIntroRefs.current.push(ref)}>

            <div className="flex justify-center gap-0 text-white transition-all duration-300 font-white-outline" ref={ref => homeIntroRefs.current.push(ref)}>
              
              {
              kevin.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
              
            </div>
            <div className="flex gap-0 text-gray-300 text-opacity-0 transition-all duration-300 font-white-outline" ref={ref => homeIntroRefs.current.push(ref)}>
              {
              kim.map((char, index) => (
                <span className="transition-colors cursor-default hover:text-gray-400 hover:text-opacity-50">{char}</span>
              ))
              }
            </div>
          </div>

          <div id="fullstack" className="flex justify-center w-full transition-all duration-300 home-text-small"
            ref={ref => homeIntroRefs.current.push(ref)} >
            <div id="fullstack" className="flex justify-center gap-0 text-white text-opacity-0 transition-all duration-300 font-white-outline"  
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              fullstack.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
            </div>
            <div id="fullstack" className="flex text-white transition-all duration-300 font-white-outline" 
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              developer.map((char, index) => (
                <span className="transition-colors cursor-default hover:text-gray-400 hover:text-opacity-50">{char}</span>
              ))
              }
            </div>
            <div className="text-green-400">.</div>
          </div>
        </section>

        <section className="absolute bottom-24">
          <button className="flex flex-col items-center w-full text-white transition-all duration-300 hover:text-gray-400"
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
