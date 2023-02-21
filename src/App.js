
import './App.css';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import ProjectOne from './components/projectSection/projectSection';




import Icon from '@mdi/react';
import { mdiRun, mdiFinance, mdiWeightLifter } from '@mdi/js';
import ProjectSection from './components/projectSection/projectSection';
import HomeSection from './components/homeSection';

import downArrow from './icons/down-arrow.svg'

function App() {

  const projectsRef = useRef(null)
  const arrowRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    arrowRef.current.classList.add('opacity-100')
    arrowRef.current.classList.remove('opacity-0')
  }, []);

  useEffect(() => {
    navRef.current.classList.add('top-0')
    navRef.current.classList.remove('-top-1/4')
  }, []);

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(()=>{
    console.log(projectsRef);
  },[])
    
  return (
    <div className='APP bg-dev-top-dark'>
      
      <div className='nav w-52 fixed left-1/2 -translate-x-1/2 h-8 bg-black bg-opacity-60 text-white  
      bottom-left-round bottom-right-round p-2 text-xs grid grid-cols-3 gap-x-4 z-20
      -top-1/4 transition-all delay-300 duration-1000'
      ref={navRef}>
        <button className='menu transition-all'>ABOUT</button>
        <button className='menu transition-all' onClick={scrollToProjects}>PROJECTS</button>
        <button className='menu transition-all'>CONTACT</button>
      </div>

      <div className='nav 
      absolute left-1/2 top-3/4 -translate-x-1/2   
      bg-opacity-25 
      text-white text-xs
      top-left-round bottom-right-round
      p-2 
      z-20 '>
        
        <button className='transition-all flex justify-center items-center 
        text-white  text-opacity-50 opacity-0  hover:text-red-700 hover:text-opacity-50 
        transition-opacity delay-500 duration-1000'
         onClick={scrollToProjects} ref={arrowRef}>
          <ReactSVG className=' ' src={downArrow}/>
        </button>
        
      </div>

      
      <section className='flex justify-center relative'>
        <HomeSection/>
      </section>

      <section className='flex justify-center relative overflow-hidden' ref={projectsRef}>
        <ProjectSection />
      </section>

      <section className='flex justify-center relative overflow-hidden'>
        
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
