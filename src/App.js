
import './App.css';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import ProjectOne from './components/projectSection/projectSection';
import spotlight1 from './images/spotlight1.png'

import warmlight from "./images/warmlight.png"

import Icon from '@mdi/react';
import {
mdiRun,
mdiFinance,
mdiWeightLifter,
mdiHome,
mdiHammerWrench,
mdiCardAccountDetailsOutline,
mdiEmail
} from '@mdi/js';
import ProjectSection from './components/projectSection/projectSection';
import HomeSection from './components/home/homeSection';

import downArrow from './icons/down-arrow.svg'
import AboutSection from './components/aboutSection/aboutSection';
import ContactSection from './components/contactSection/contactSection';


function App() {

  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const arrowRef = useRef(null)
  const navRef = useRef(null)

  

  useEffect(() => {
    navRef.current.classList.add('top-10')
    navRef.current.classList.remove('-top-1/4')
  }, []);

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

  const handleScrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
  };

  let lastScrollY = 0
  const handleScroll = () =>{
    const nav = navRef.current
    
    if(nav){

      let currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        nav.classList.add('top-10')
        nav.classList.remove('-top-1/4')
        
      } else {
        nav.classList.add('-top-1/4')
        nav.classList.remove('top-10')
      }
      lastScrollY = currentScrollY

    }

  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  useEffect(()=>{
  },[lastScrollY])
  
    
  return (
    <div className='relative APP bg-mosaic-gradient' onLoad={handleScrollToTop}>
      
      
      <ul className='fixed z-50 flex p-2 text-xs transition-all duration-500 -translate-x-1/2 bg-black rounded-sm nav w-fit left-1/2 gap-x-4 bg-opacity-80 -top-1/4 border-glow-white '
      ref={navRef}>
          
        <li className='flex gap-1 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={handleScrollToTop}>
        <p className='text-green-300'>01.</p> <p>HOME</p>
        </li>
        <li className='flex gap-1 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToProjects}>
          <p className='text-green-300'>02.</p> <p>PROJECTS</p>
        </li>
        <li className='flex gap-1 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToAbout}>
          <p className='text-green-300'>03.</p> <p>ABOUT</p>
        </li>
        <li className='flex gap-1 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToContact}>
          <p className='text-green-300'>04.</p> <p>CONTACT</p>
        </li>
        
      </ul>
      
      <section className=''>
        <HomeSection projectsRef={projectsRef}/>
      </section>

      <section className='relative flex justify-center overflow-hidden' ref={projectsRef}>
        <ProjectSection />
      </section>

      <section className='relative flex justify-center overflow-hidden' ref={aboutRef}>
        <AboutSection/>
      </section>

      <section className='relative flex justify-center' ref={contactRef}>
        <ContactSection/>
      </section>

      
    </div>
  );
}

export default App;
