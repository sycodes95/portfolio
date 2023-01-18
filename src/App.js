import logo from './logo.svg';
import './App.css';

import resurgence from './videos/0001-3806.mkv'


import { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import soundOn from './icons/volume-high.svg'
import soundOff from './icons/volume-off.svg'

function App() {
  const [muted, setMuted] = useState(true)
  const [muteButtonIcon, setMuteButtonIcon] = useState(soundOff)

  const videoRef = useRef(null)

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
    <div className='appCon'>
      <div className='max-h-screen flex items-center object-cover'>
        <video ref={videoRef} className='object-cover h-screen w-full' playsInline autoPlay loop muted>
          <source className=''src={resurgence} type="video/mp4"/>
        </video>
        <div className=' text-6xl text-yellow-100 font-thin fixed top-12 left-2/4 -translate-x-2/4  border-yellow-100 '>
          SY.KK
        </div>
        <button className='fixed bottom-40 left-2/4 -translate-x-2/4' onClick={handleMuteClick}>
          <ReactSVG className='text-yellow-100 fill-current h-16 w-16' src={muteButtonIcon}/>
        </button>
      </div>
      <div className='h-50'>
        
      </div>
    </div>
  );
}

export default App;
