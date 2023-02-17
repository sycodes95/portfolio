import logo from './logo.svg';
import './App.css';

import resurgence from './videos/0001-3806.mkv'
import { CSSTransition } from 'react-transition-group';

import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';



import soundOn from './icons/volume-high.svg'
import soundOff from './icons/volume-off.svg'

import Icon from '@mdi/react';
import { mdiRun, mdiFinance, mdiWeightLifter } from '@mdi/js';



function App() {
  const [muted, setMuted] = useState(true)
  const [muteButtonIcon, setMuteButtonIcon] = useState(soundOff)
  const [introText, setIntroText] = useState(null)

  const videoRef = useRef(null)

  const videoDes = ['video created with AI','видео создано с помощью ИИ', 'AI로 만든 영상', ]
  

  const [index, setIndex] = useState(0)
  const introTextArray = [

  ]

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setIndex(index => (index + 1) % videoDes.length)
    }, 300)
    return () => clearInterval(intervalId)
  }, [])

  const handleMuteClick = () =>{
    if(muted){
      setMuted(false)
      setMuteButtonIcon(soundOn)
      videoRef.current.muted = !muted;
    } else {
      setMuted(true)
      setMuteButtonIcon(soundOff)
      videoRef.current.muted = true;
    }
  }
  return (
    <div className='app-con '>

      <div className='nav w-52 fixed left-2/4 -translate-x-1/2 h-8 bg-striped-content bg-opacity-80 text-white  
      bottom-left-round bottom-right-round p-2 text-xs grid grid-cols-3 gap-x-4'>
        <button className='menu transition-all'>ABOUT</button>
        <button className='menu transition-all'>PROJECTS</button>
        <button className='menu transition-all'>CONTACT</button>
      </div>
      <div className='content-con max-h-screen grid  bg-dev ' >
       
        <div className='intro bg-dev-centered flex justify-center items-center h-screen w-full '>
          <div className='border-opacity-0 font-shadow-white-light font-black-outline-light text-white flex flex-col justify-center  text-center'>
            <span>Kevin <span className='text-xs'>승윤</span>  Kim</span>
            <span>Fullstack Developer.</span>
          </div>
        </div>

      </div>
      <div className='hidden'>
        <Icon path={mdiRun} size={1} />
        <Icon path={mdiFinance} size={1} />
        <Icon path={mdiWeightLifter} size={1} />
      </div>

      <div className='h-screen w-full  bg-dev-bottom-dark border-t border-gray-700 grid'>
        
        <div className=' font-shadow-white text-center flex items-center justify-center row-span-1'>
          <div className='h-36 text-center text-white text-6xl font-thin transition-all flex items-center'>
            ABOUT
          </div>
        </div>

        
        
      </div>


      <div className='h-screen w-full bg-dev-top-dark border-t border-gray-700 grid'>
        
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

      <div className='h-screen w-full bg-dev-bottom-dark border-t border-gray-700 grid'>
        
        

      </div>

      
    </div>
  );
}

export default App;
