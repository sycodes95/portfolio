import { useEffect, useState, useRef } from "react"
import Icon from '@mdi/react';
import { mdiCrosshairs, mdiEmail } from '@mdi/js';
import yellowParticles from '../../images/yellow-particles.png'
import embers from "../../images/embers.png"

function ContactSection () {
  const contactTitleLetters = useRef([])
  const bannerLineRef = useRef(null)

  const contactIconRef = useRef([]);
  const formContainerRef = useRef(null)

  const [isSubmitted, setIsSubmitted] = useState(false)
  useEffect(() => {
    
      

    const options = {
      root: null,
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          bannerLineRef.current.classList.add('h-10')
          bannerLineRef.current.classList.remove('h-0')

          formContainerRef.current.classList.add('opacity-100')
          formContainerRef.current.classList.remove('opacity-0')

          contactIconRef.current.forEach(ref => {
            ref.classList.add('opacity-100')
            ref.classList.remove('opacity-0')
          })

          contactTitleLetters.current.forEach(letter => {
            letter.classList.add('opacity-100')
            letter.classList.remove('opacity-0')
          })
        } 
      });
    }, options);
    
    observer.observe(bannerLineRef.current);
    
  }, []);

  useEffect(()=>{
    console.log(contactTitleLetters.current);
  },[])
  return(
    <div className="CONTACT-SECTION relative flex flex-col items-center gap-y-12 pt-16 pb-24  w-full h-full  bg-at " >
      
      
      
      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4 w-full 
       rounded-sm h-0 transition-all duration-1000" ref={bannerLineRef}>
        
        <div className="ICON-CONTAINER
         bg-yellow-400 bg-opacity-25 bg-striped
         h-full w-full 
         flex items-center" ref={bannerLineRef}> 
          
          <div className="flex justify-start ml-2 w-fit">
            <Icon className=" text-black  rounded-md opacity-0 transition-all delay-500 duration-1000" 
            path={mdiEmail} size={1.5} ref={ref => contactIconRef.current[0] = ref}/>
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-white text-opacity-70
          whitespace-nowrap res-font transition-all gap-x-12 max-width-768px-gap-x-none ">
            <p className="opacity-0 transition-opacity delay-300 duration-75" 
            ref={ref => contactTitleLetters.current[0] = ref}>C</p>

            <p className="opacity-0 transition-opacity delay-300 duration-100" 
            ref={ref => contactTitleLetters.current[1] = ref}>O</p>

            <p className="opacity-0 transition-opacity delay-300 duration-150"
            ref={ref => contactTitleLetters.current[2] = ref}>N</p>

            <p className="opacity-0 transition-opacity delay-300 duration-200"
            ref={ref => contactTitleLetters.current[3] = ref}>T</p>

            <p className="opacity-0 transition-opacity delay-300 duration-300" 
            ref={ref => contactTitleLetters.current[4] = ref}>A</p>

            <p className="opacity-0 transition-opacity delay-300 duration-500"
            ref={ref => contactTitleLetters.current[5] = ref}>C</p>

            <p className="opacity-0 transition-opacity delay-300 duration-700"
            ref={ref => contactTitleLetters.current[6] = ref}>T</p>

            
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-black   rounded-md flip opacity-0 transition-all delay-500 duration-1000" 
            path={mdiEmail} size={1.5} ref={ref => contactIconRef.current[1] = ref}/>
          </div>
          
          
        </div>
        
        
      </div>
      <div className="h-fit w-full flex justify-center overflow-hidden max-width-768px-overflow-visible " >

      
        <form className="CONTACT-FORM bg-black bg-opacity-30 flex flex-col gap-y-1 items-center 
        p-2 text-white pb-8 w-96 max-width-768px-width-full border-4 border-black border-glow-yellow 
        opacity-0 transition-opacity delay-500 duration-1000" 
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
      </div>
      <div className="h-fit w-full flex justify-center z-50 text-glow-white">
        <a href="https://github.com/sycodes95/portfolio" className="text-white hover:text-green-300 transition-all">DESIGNED AND CREATED BY KEVIN KIM</a>
      </div>

      


      
    </div>
  )
}

export default ContactSection;