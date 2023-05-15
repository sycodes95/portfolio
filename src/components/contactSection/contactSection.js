import { useEffect, useState, useRef } from "react"
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
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
    <div className="flex flex-col  pb-24 pt-12 gap-y-16 w-full overflow-hidden" >
      
      
      
     
      <section>
        <div className="relative flex justify-center w-full z-10 rounded-full" >
          <Icon className=" text-gray-300  transition-all delay-500 duration-1000  rounded-full" 
          path={mdiEmail} size={3.2} />
        </div> 
      </section>
        
      <section className="relative flex justify-center items-center 
      rounded-sm transition-all duration-1000" ref={bannerLineRef}>
        <div className="absolute right-0 translate-x-1/2 flex items-center w-fit text-gray-300 text-opacity-60 text-8xl font-thin font-family-field-gothic
        overflow-hidden whitespace-nowrap transition-all duration-300" ref={contactRepeatRef}>
          {
          contactRepeat.map((str, index) => (
            <p key={index}>{str}</p>
          ))
          }
        </div>
      </section>
          
        
      <section className="flex justify-center overflow-hidden mt-16 max-width-768px-overflow-visible " >

      
        <form className="CONTACT-FORM  bg-black bg-opacity-30 flex flex-col gap-y-1 items-center 
        p-2 text-white pb-8 w-96 max-width-768px-width-full border-4 border-black border-glow-white
         transition-opacity delay-500 duration-1000 rounded-xl" 
        target="_blank" action="https://formsubmit.co/123331be8f05163ba4dd9aeadde64f94" method="POST" ref={formContainerRef}
        >
          
          <input className="hidden " type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>
          
          <label className="text-center font-black-outline-light flex flex-col ">Email <span className="text-xs text-red-700 ">(required)</span></label>
          <input className="bg-black bg-opacity-25 w-80 border-b-2 border-white border-opacity-50 z-50" type="email" name="email" placeholder="Email..." required/>
          <label className="text-center font-black-outline-light flex flex-col">Phone <span className="text-xs text-red-300 ">(optional)</span></label>
          <input className="bg-black bg-opacity-25 w-80 z-50 border-b-2 border-white border-opacity-50" 
          type="tel" name="tel" placeholder="Phone...(optional)"/>
          <label className="text-center font-black-outline-light flex flex-col ">Text <span className="text-xs text-red-700 ">(required)</span></label>
          <textarea className="bg-black bg-opacity-25 w-80 h-80 z-50 border-b-2 border-white border-opacity-50 resize-none" 
          type="text" name="text" placeholder="Text..." required/>
          <button className="bg-red-700 bg-opacity-25 w-full hover:bg-opacity-50 transition-colors h-8 z-50 mt-8" type="submit">Submit</button>
        </form>
      </section>
      <section className="h-fit w-full flex justify-center z-50 text-glow-white">
        <a href="https://github.com/sycodes95/portfolio" target="_blank" className="text-white hover:text-green-300 transition-all">DESIGNED AND CREATED BY KEVIN KIM</a>
      </section>

      


      
    </div>
  )
}

export default ContactSection;