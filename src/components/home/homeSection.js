import { useRef, useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import smoke from '../../images/smokebot.png'

function HomeSection(props) {

  const projectsRef = props.projectsRef

  const arrowRefs = useRef([])

  const homeIntroRefs = useRef([])

  const kevin = ['K', 'E', 'V', 'I', 'N']
  const kim = ['K', 'I', 'M']
  const fullstack = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K']
  const developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(()=>{
    setInterval(()=>{
      arrowRefs.current.forEach((ref, index)=>{
        let timing = (index + 1) * 100
        console.log(arrowRefs);
        console.log(ref.classList);
        
        setTimeout(()=>{
          ref.classList.remove('opacity-0')
          ref.classList.add('opacity-100')
          
        }, timing)

        setTimeout(()=>{
          ref.classList.remove('opacity-100')
          ref.classList.add('opacity-0')
          
        }, (timing * 1000) / timing)
        
      })

      

    }, arrowRefs.current.length * 500)
   
  },[])

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
    <section className="overflow-visible">
      <div className="relative flex items-center justify-center w-full overflow-visible min-height-100dvh">
       

        <section className="absolute top-10 left-10">
          <div className="flex items-center p-2 text-4xl font-bold text-white border-4 border-green-400 rounded-sm">
           
          </div>
        </section>

        

        <section className="flex flex-col items-center w-full h-full pt-32 pb-32 overflow-hidden home-text" >
          
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

          <div id="fullstack" className="flex justify-center w-full transition-all duration-300 home-text-small max-width-768px-flex-col"
            ref={ref => homeIntroRefs.current.push(ref)} >
            <div id="fullstack" className="flex justify-center gap-0 text-white text-opacity-0 transition-all duration-300 font-white-outline"  
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              fullstack.map((char, index) => (
                <span className="">{char}</span>
              ))
              }
            </div>
            <div id="fullstack" className="flex text-white transition-all duration-300 font-white-outline max-width-768px-flex-justify-center" 
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              developer.map((char, index) => (
                <span className="transition-colors cursor-default hover:text-gray-400 hover:text-opacity-50">{char}</span>
              ))
              }
              <div className="text-green-400">.</div>

            </div>
          </div>
        </section>

        <section className="absolute bottom-36">
          <button className="flex flex-col items-center w-full text-white transition-all duration-300 hover:text-gray-400"
          onClick={scrollToProjects}>
            <div className="flex flex-col justify-center">
              <Icon className="flex transition-opacity duration-500 opacity-0 h-fit w-2vw" path={mdiChevronDown} ref={ref => arrowRefs.current.push(ref)}/>
              <Icon className="flex w-full transition-opacity duration-500 opacity-0 w-2vw" path={mdiChevronDown} ref={ref => arrowRefs.current.push(ref)}/>
              <Icon className="flex w-full transition-opacity duration-500 opacity-0 w-2vw" path={mdiChevronDown} ref={ref => arrowRefs.current.push(ref)}/>

            </div>
            
          </button>
        </section>

      </div>

    </section>
  );
}

export default HomeSection;
