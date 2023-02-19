
import './App.css';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import ProjectOne from './components/projectSection/projectSection';




import Icon from '@mdi/react';
import { mdiRun, mdiFinance, mdiWeightLifter } from '@mdi/js';
import ProjectSection from './components/projectSection/projectSection';
import HomeSection from './components/homeSection';



function App() {

  const projectsRef = useRef(null)

  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(()=>{
    console.log(projectsRef);
  },[])
    
  return (
    <div className='app-con '>
      
      <div className='nav w-52 fixed right-0  h-8 bg-striped-content bg-opacity-80 text-white  
      bottom-left-round bottom-right-round p-2 text-xs grid grid-cols-3 gap-x-4 z-10'>
        <button className='menu transition-all'>ABOUT</button>
        <button className='menu transition-all' onClick={scrollToProjects}>PROJECTS</button>
        <button className='menu transition-all'>CONTACT</button>
      </div>

      
      

      <HomeSection/>

      <section ref={projectsRef}>
        <ProjectSection />
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
      


      

      <div className='h-screen w-full bg-dev-centered-reversed  grid'>
        
        

      </div>

      
    </div>
  );
}

export default App;
