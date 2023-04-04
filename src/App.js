
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
    navRef.current.classList.add('top-0')
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
        nav.classList.add('top-0')
        nav.classList.remove('-top-10')
        console.log('lower');
        
      } else {
        nav.classList.add('-top-10')
        nav.classList.remove('top-0')
        console.log('higher');
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
    <div className='APP bg-dev-classic relative' onLoad={handleScrollToTop}>
      
      
      <ul className='nav w-fit fixed left-1/2 -translate-x-1/2 h-10 
       p-2 text-sm gap-x-4 z-50 flex bg-black bg-opacity-50
      -top-1/4 transition-all border-t-4 border-b-2 border-b-white  border-red-800 border-opacity-50 duration-500'
      ref={navRef}>
          
        <li className='menu transition-all cursor-pointer text-white hover:text-white transition-colors whitespace-nowrap' onClick={handleScrollToTop}>
          [HOME]
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white transition-colors whitespace-nowrap' onClick={scrollToProjects}>
          [PROJECTS]
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white transition-colors whitespace-nowrap' onClick={scrollToAbout}>
          [ABOUT]
        </li>
        <li className='menu transition-all cursor-pointer text-white hover:text-white transition-colors whitespace-nowrap' onClick={scrollToContact}>
          [CONTACT]
        </li>
        
      </ul>
      
      <section className='flex justify-center relative'>
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
