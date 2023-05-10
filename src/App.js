
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
    console.log(process.env.REACT_APP_CONTACT_FORM_EMAIL);
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
      console.log(currentScrollY);
      if (currentScrollY < lastScrollY) {
        nav.classList.add('top-10')
        nav.classList.remove('-top-1/4')
        console.log('lower');
        
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
    <div className='APP bg-mosaic-gradient relative' onLoad={handleScrollToTop}>
      
      
      <ul className='nav w-fit fixed left-1/2  -translate-x-1/2 
       p-2 text-xs gap-x-4 z-50 flex bg-black bg-opacity-80 
      -top-1/4 transition-all rounded-lg border-glow-white  duration-500'
      ref={navRef}>
          
        <li className='menu transition-all cursor-pointer text-white hover:text-white whitespace-nowrap flex gap-1' onClick={handleScrollToTop}>
        <p className='text-gray-500'>01.</p> <p>HOME</p>
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white whitespace-nowrap flex gap-1' onClick={scrollToProjects}>
          <p className='text-gray-500'>02.</p> <p>PROJECTS</p>
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white whitespace-nowrap flex gap-1' onClick={scrollToAbout}>
          <p className='text-gray-500'>03.</p> <p>ABOUT</p>
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white whitespace-nowrap flex gap-1' onClick={scrollToContact}>
          <p className='text-gray-500'>04.</p> <p>CONTACT</p>
        </li>
        
      </ul>
      
      <section className=''>
        <HomeSection projectsRef={projectsRef}/>
      </section>

      <section className='flex justify-center relative overflow-hidden' ref={projectsRef}>
        <ProjectSection />
      </section>

      <section className='flex justify-center relative overflow-hidden' ref={aboutRef}>
        <AboutSection/>
      </section>

      <section className='flex justify-center relative' ref={contactRef}>
        <ContactSection/>
      </section>

      
    </div>
  );
}

export default App;
