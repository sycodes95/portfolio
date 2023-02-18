import logo from './logo.svg';
import './App.css';

import resurgence from './videos/0001-3806.mkv'
import { CSSTransition } from 'react-transition-group';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import JS_ICON from './icons/js.svg'

import { ReactIcon } from 'devicon';

import bulb from './images/bulb.png'

import Icon from '@mdi/react';
import { mdiRun, mdiFinance, mdiWeightLifter } from '@mdi/js';



function App() {
  const [muted, setMuted] = useState(true)
  
  const [introText, setIntroText] = useState(null)

  const bulbRef = useRef(null);

  const [index, setIndex] = useState(0)
  const introTextArray = [

  ]

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x);
    bulbRef.current.style.marginLeft = `${x / 50}px`;
    bulbRef.current.style.marginTop = `${y / 50}px`;
  };

  

  useEffect(() => {
    

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='app-con '>
      
      
        
      
      
      <div className='nav w-52 fixed left-2/4 -translate-x-1/2 h-8 bg-striped-content bg-opacity-80 text-white  
      bottom-left-round bottom-right-round p-2 text-xs grid grid-cols-3 gap-x-4 z-10'>
        <button className='menu transition-all'>ABOUT</button>
        <button className='menu transition-all'>PROJECTS</button>
        <button className='menu transition-all'>CONTACT</button>
      </div>

      
      

      <section className=' content-con max-h-screen grid  bg-dev corners' >
       
        <div className='bg-dev-centered-reversed flex justify-center items-center h-screen w-full '>

          <div className='absolute h-full w-full max-w-full flex justify-center overflow-hidden'>
          
            <img className='absolute top-neg-20 pointer-events-none' src={bulb} ref={bulbRef}/>
          </div>

          <div className='border-opacity-0 flex flex-col justify-center text-center'>
            <span className='font-shadow-white-light text-white'>Kevin <span className='text-xs'>승윤</span>  Kim</span>
            <span className='font-shadow-white-light text-white '>Fullstack Developer.</span>
          </div>
        </div>

      </section>
      <div className='hidden '>
        <Icon path={mdiRun} size={1} />
        <Icon path={mdiFinance} size={1} />
        <Icon path={mdiWeightLifter} size={1} />
      </div>

      <div className='h-screen w-full  bg-dev-centered-reversed  border-gray-700 '>
        
        <div className=' text-center flex justify-center row-span-1'>
          <div className='h-36 text-center text-white text-6xl font-thin transition-all flex items-center font-shadow-white '>
            ABOUT
          </div>
          
          
        </div>

        <div className='flex justify-center'>
          <i class="devicon-react-original text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-javascript-plain text-6xl text-white fill-current font-black-outline-light"></i>
          
          <i class="devicon-html5-plain text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-css3-plain text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-tailwindcss-plain text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-nodejs-plain text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-express-original text-6xl text-white fill-current font-black-outline-light"></i>
          <i class="devicon-mongodb-plain-wordmark  text-6xl text-white fill-current font-black-outline-light"></i>
        </div>

        
        
      </div>


      <div className='h-screen w-full bg-dev-centered-reversed  border-gray-700 grid'>
        
        <div className=' font-shadow-white text-center flex items-center justify-center row-span-1'>
          <div className='h-36 text-center text-white text-6xl font-thin transition-all flex items-center'>PROJECTS</div>
        </div>

        <div className=' bg-dev grid grid-cols-3 pl-20 pr-20 justify-center row-span-5'>

          <div className='m-12 text-center border border-black border-opacity-25 bg-black bg-opacity-25 text-white font-shadow-white-light rounded-sm grid-cols-2'>
            <div className='bg-striped-content bg-opacity-50 rounded-sm bottom-left-round  bottom-right-round'>EDGE SCOUT</div>
          </div>

          <div className='m-12 text-center border border-black border-opacity-25 bg-black bg-opacity-25 text-white font-shadow-white-light rounded-sm grid-cols-2'>
            <div className='bg-striped-content bg-opacity-50 rounded-sm bottom-left-round  bottom-right-round'>FDLA</div>
          </div>

          <div className='m-12 text-center border border-black border-opacity-25 bg-black bg-opacity-25 text-white font-shadow-white-light rounded-sm grid-cols-2'>
            <div className='bg-striped-content bg-opacity-50 rounded-sm bottom-left-round  bottom-right-round'>FDLA</div>
          </div>
        </div>

      </div>

      <div className='h-screen w-full bg-dev-centered-reversed border-gray-700 grid'>
        
        

      </div>

      
    </div>
  );
}

export default App;
