import { useRef, useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import whiteLight from '../../images/white-light-bit.png'

function HomeSection(props) {

  const projectsRef = props.projectsRef

  const arrowRefs = useRef([])

  const homeIntroRefs = useRef([])

  const introTextRef = useRef(null)

  const kevin = ['K', 'E', 'V', 'I', 'N']
  const kim = ['K', 'I', 'M']
  const fullstack = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K']
  const developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(()=>{
    setInterval(()=>{
      arrowRefs.current.forEach((ref, index)=>{
        let timing = (index + 1) * 100
        
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
          ref.style.columnGap = pixels + 'vw'
          
        })
        prevScroll = window.scrollY
      }
      
    }
    
    window.addEventListener('scroll', handleScroll)

    // return ()=> {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  },[])

  useEffect(()=>{
    if(introTextRef.current) {
      introTextRef.current.classList.remove('opacity-0')
      introTextRef.current.classList.add('opacity-100')
    }    
    homeIntroRefs.current && homeIntroRefs.current.forEach(ref => {
      if(ref.classList.contains('left-1/2')){
        ref.classList.remove('left-1/2')
        ref.classList.add('left-0')
      } 
      if(ref.classList.contains('right-1/2')){
        ref.classList.remove('right-1/2')
        ref.classList.add('right-0')
      } 
    })
    setTimeout(()=>{
      homeIntroRefs.current && homeIntroRefs.current.forEach(ref => {
        if(ref.classList.contains('duration-2000')){
          ref.classList.remove('duration-2000')
        }
      })
    },2000)
    
  },[])

  return (
    <section className="overflow-visible">
      <div className="relative flex items-center justify-center w-full overflow-visible min-height-100dvh">
       

        <section className="absolute top-0 ">
          {/* <img className="bg-cover opacity-5" src={whiteLight}/> */}
        </section>

        

        <section className="relative flex flex-col items-center w-full h-full pt-32 pb-32 overflow-hidden transition-opacity opacity-0 duration-2000 home-text" ref={introTextRef} >
          
          <div className="sticky flex transition-all duration-2000 left-1/2 w-fit h-fit home-text-big" ref={ref => homeIntroRefs.current.push(ref)}>

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

          <div id="fullstack" className="sticky flex transition-all duration-2000 right-1/2 w-fit home-text-small max-width-768px-flex-col" ref={ref => homeIntroRefs.current.push(ref)} >
            
            <div id="fullstack" className="flex justify-center gap-0 text-white text-opacity-0 transition-all duration-300 font-white-outline"  
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              fullstack.map((char, index) => (
                <span className="hover:text-gray-400 hover:text-opacity-50">{char}</span>
              ))
              }
            </div>
            <div id="fullstack" className="flex text-white transition-all duration-300 max-width-768px-flex-justify-center" 
            ref={ref => homeIntroRefs.current.push(ref)}>
              {
              developer.map((char, index) => (
                <span className="transition-colors cursor-default font-white-outline">{char}</span>
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
