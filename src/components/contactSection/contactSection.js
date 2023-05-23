import { useEffect, useState, useRef } from "react"
import Icon from '@mdi/react';
import { mdiEmail, mdiSendOutline } from '@mdi/js';
import yellowParticles from '../../images/yellow-particles.png'
import embers from "../../images/embers.png"

function ContactSection () {
  const contactTitleLetters = useRef([])
  const bannerLineRef = useRef(null)

  const contactIconRef = useRef([]);
  const formContainerRef = useRef(null)

  const contactRepeat = Array.from({ length: 200 }, () => 'CONTACT-');

  const contactRepeatRef = useRef(null)

  const [isSubmitted, setIsSubmitted] = useState(false)

  // useEffect(() => {
    
      

  //   const options = {
  //     root: null,
  //     threshold: 0.5,
  //   };
    
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {

  //         bannerLineRef.current.classList.add('h-10')
  //         bannerLineRef.current.classList.remove('h-0')

  //         formContainerRef.current.classList.add('opacity-100')
  //         formContainerRef.current.classList.remove('opacity-0')

  //         contactIconRef.current.forEach(ref => {
  //           ref.classList.add('opacity-100')
  //           ref.classList.remove('opacity-0')
  //         })

  //         contactTitleLetters.current.forEach(letter => {
  //           letter.classList.add('opacity-100')
  //           letter.classList.remove('opacity-0')
  //         })
  //       } 
  //     });
  //   }, options);
    
  //   observer.observe(bannerLineRef.current);
    
  // }, []);

  useEffect(()=>{
    let prevScroll = 0;
    let percentage = 0;

    const handleScroll = () =>{
        
      if(prevScroll < window.scrollY){
        percentage += 0.25
      } else {
        percentage -= 0.25
      }
      if (window.scrollY === 0) {
        percentage = 0; 
      }

      contactRepeatRef.current.style.right = percentage + '%'
      
      prevScroll = window.scrollY
      
    }
    
    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return(
    <div className="flex flex-col items-center w-full p-12 overflow-hidden bg-black bg-opacity-50 gap-y-8" >
      
      
      
     
      <section>
       <p className="text-green-400 text-opacity-0 font-4vw font-family-field-exoplane font-green-outline">CONTACT ME!</p>
      </section>
          
        
      <section className="relative flex justify-center p-4 overflow-hidden max-width-768px-overflow-visible" >

          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r"></div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"></div>


        <form className="flex flex-col items-center p-2 pb-8 text-white transition-opacity duration-1000 delay-500 CONTACT-FORM gap-y-4 w-96 max-width-768px-width-full rounded-xl" 
        target="_blank" action="https://formsubmit.co/123331be8f05163ba4dd9aeadde64f94" method="POST" ref={formContainerRef}
        >
          
          <input className="hidden " type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>
          
          <label className="flex flex-col w-full text-left font-black-outline-light">Email </label>
          
          <input className="z-40 w-full p-1 bg-green-400 border border-green-400 rounded-sm bg-opacity-20" type="email" name="email" placeholder="Email..." required/>

          <label className="flex w-full text-left font-black-outline-light">Message </label>
          <textarea className="z-40 w-full p-1 bg-green-400 border border-green-400 rounded-sm bg-opacity-20 h-44" 
          type="text" name="text" placeholder="Message..." required/>
          <button className="z-50 flex items-center justify-center w-full h-8 mt-8 transition-colors bg-green-400 bg-opacity-50 rounded-sm hover:bg-opacity-25" type="submit"><Icon path={mdiSendOutline} size={1} /></button>
        </form>
      </section>
      
    </div>
  )
}

export default ContactSection;