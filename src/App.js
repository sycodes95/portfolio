
import './App.css';

import { useEffect, useRef, useState } from 'react';

import { Divide as Hamburger } from 'hamburger-react'

import Icon from '@mdi/react';
import {
mdiHome,
mdiEmail,
mdiHammer,
mdiHead
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

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  

  useEffect(() => {
    navRef.current.classList.add('top-0')
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
        nav.classList.add('top-0')
        nav.classList.remove('-top-1/4')
        
      } else {
        nav.classList.add('-top-1/4')
        nav.classList.remove('top-0')
      }
      lastScrollY = currentScrollY
      
    }

  }

  const handleResize = () => {
    if (window.innerWidth > 769) {
      setHamburgerIsOpen(false)
    }
  }
  useEffect(()=>{
    hamburgerIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  },[hamburgerIsOpen])
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize);
    }
  },[])

  useEffect(()=>{
  },[lastScrollY])
  
    
  return (
    <div className='relative overflow-hidden APP bg-mosaic-gradient' onLoad={handleScrollToTop}>
      
      
      <div className='fixed z-50 flex items-center justify-end w-full h-20 gap-8 pr-8 text-sm transition-all duration-500 -top-1/4' on
      ref={navRef}>
        <ul className='flex gap-8 p-2 max-width-768px-hidden'>
          <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={handleScrollToTop}>
          <Icon className='text-green-400' path={mdiHome} size={0.6} /> <p>HOME</p>
          </li>
          <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToProjects}>
            
            <Icon className='text-green-400' path={mdiHammer} size={0.6} />
            <p>PROJECTS</p>
          </li>
          <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToAbout}>
            <Icon className='text-green-400' path={mdiHead} size={0.6} /> <p>ABOUT</p>
          </li>
          <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToContact}>
          <Icon className='text-green-400' path={mdiEmail} size={0.6} /> <p>CONTACT</p>
          </li>
        </ul>
        <div className='hidden max-width-768px-visible'>
          <div className='fixed z-40 top-4 right-4'>
            <Hamburger color='rgb(74 222 128)' toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
          </div>
          {
          hamburgerIsOpen &&
          <div className=''>

            <ul className='fixed top-0 right-0 z-20 flex-col items-center justify-center hidden h-full gap-8 p-2 bg-black bg-opacity-80 w-80 max-width-768px-visible'>
              <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={handleScrollToTop}>
              <Icon className='text-green-400' path={mdiHome} size={0.6} /> <p>HOME</p>
              </li>
              <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToProjects}>
                
                <Icon className='text-green-400' path={mdiHammer} size={0.6} />
                <p>PROJECTS</p>
              </li>
              <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToAbout}>
                <Icon className='text-green-400' path={mdiHead} size={0.6} /> <p>ABOUT</p>
              </li>
              <li className='flex items-center gap-2 text-white transition-all cursor-pointer menu hover:text-white whitespace-nowrap' onClick={scrollToContact}>
              <Icon className='text-green-400' path={mdiEmail} size={0.6} /> <p>CONTACT</p>
              </li>
            </ul>
            <div className='fixed top-0 left-0 w-full h-full backdrop-blur-md'></div>
          </div>
          }
        </div>
        
      </div>
      
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
