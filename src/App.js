
import './App.css';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import ProjectOne from './components/projectSection/projectSection';


import warmlight from "./images/warmlight.png"

import Icon from '@mdi/react';
import { mdiRun, mdiFinance, mdiWeightLifter } from '@mdi/js';
import ProjectSection from './components/projectSection/projectSection';
import HomeSection from './components/homeSection';

import downArrow from './icons/down-arrow.svg'
import AboutSection from './components/aboutSection/aboutSection';
import ContactSection from './components/contactSection/contactSection';


function App() {

  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const arrowRef = useRef(null)
  const navRef = useRef(null)

  

  useEffect(() => {
    navRef.current.classList.add('top-0')
    navRef.current.classList.remove('-top-1/4')
    console.log(process.env.REACT_APP_CONTACT_FORM_EMAIL);
  }, []);

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const handleScrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
  };
  
    
  return (
    <div className='APP bg-dev-classic relative' onLoad={handleScrollToTop}>
      
      
      <ul className='nav w-fit fixed left-1/2 -translate-x-1/2 h-8 bg-black bg-opacity-60 text-white
      bottom-left-round bottom-right-round p-2 text-xs gap-x-4 z-50 flex
      -top-1/4 transition-all delay-300 duration-1000'
      ref={navRef}>
        <li className='menu transition-all cursor-pointer' onClick={handleScrollToTop}>HOME</li>
        <li className='menu transition-all cursor-pointer' onClick={scrollToProjects}>PROJECTS</li>
        <li className='menu transition-all cursor-pointer' onClick={scrollToAbout}>ABOUT</li>
        <li className='menu transition-all cursor-pointer' >CONTACT</li>
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

      <section className='flex justify-center relative'>
        <ContactSection/>
      </section>
      

      

      {
        /*
        <section className='h-screen w-full  bg-dev-centered-reversed '>
        
          <div className=' text-center flex justify-center row-span-1'>
            <div className='h-36 text-center text-white text-6xl font-thin transition-all flex items-center font-shadow-white '>
              ABOUT
            </div>
            
            
          </div>

          <div className='flex justify-center'>
            <i class="devicon-javascript-plain text-6xl text-white fill-current font-black-outline-light"></i>
            <i class="devicon-react-original text-6xl text-white fill-current font-black-outline-light"></i>
            
            <i class="devicon-tailwindcss-plain text-6xl text-white fill-current font-black-outline-light"></i>
            <i class="devicon-nodejs-plain text-6xl text-white fill-current font-black-outline-light"></i>
            <i class="devicon-express-original text-6xl text-white fill-current font-black-outline-light"></i>
            <i class="devicon-mongodb-plain-wordmark  text-6xl text-white fill-current font-black-outline-light"></i>
          </div>

          <div className='hidden '>
            <Icon path={mdiRun} size={1} />
            <Icon path={mdiFinance} size={1} />
            <Icon path={mdiWeightLifter} size={1} />
          </div>

          
          
        </section>
        */

      }
      


      

      

      
    </div>
  );
}

export default App;
