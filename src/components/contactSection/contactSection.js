import { useEffect, useState } from "react"
import Icon from '@mdi/react';
import { mdiCrosshairs, mdiEmail } from '@mdi/js';
import embers from "../../images/embers.png"

function ContactSection () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  useEffect(()=>{
    console.log(process.env.REACT_APP_CONTACT_FORM_EMAIL);
  },[])
  return(
    <div className="CONTACT-SECTION flex flex-col items-center  pb-48 relative w-full ">
      

      
      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4 w-full
       rounded-sm h-12">
        
        <div className="ICON-CONTAINER
         bg-black bg-opacity-25 bg-striped
         h-full w-full 
         flex items-center 
          ">
          <div className="flex justify-start ml-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md" path={mdiEmail} size={1.5} />
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-red-700 text-opacity-70 text-xl">
            <span>C O N T A C T</span>
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md flip" path={mdiEmail} size={1.5} />
          </div>
          
          
        </div>
        
        
      </div>
      <form className="CONTACT-FORM bg-black bg-opacity-25 flex flex-col gap-y-1 items-center 
      p-2 text-white pb-8 w-96 max-width-768px-width-full" 
      target="_blank" action="https://formsubmit.co/123331be8f05163ba4dd9aeadde64f94" method="POST">
        
        <input className="hidden" type="text" name="_honey"/>
        <input type="hidden" name="_captcha" value="false"/>
        
        <label className="text-center font-black-outline-light flex flex-col">Email <span className="text-xs text-red-700 ">(required)</span></label>
        <input className="bg-black bg-opacity-25 w-80" type="email" name="email" placeholder="Email..." required/>
        <label className="text-center font-black-outline-light flex flex-col">Phone <span className="text-xs text-red-300 ">(optional)</span></label>
        <input className="bg-black bg-opacity-25 w-80" type="tel" name="tel" placeholder="Phone...(optional)"/>
        <label className="text-center font-black-outline-light flex flex-col ">Text <span className="text-xs text-red-700 ">(required)</span></label>
        <textarea className="bg-black bg-opacity-25 w-80 h-80" type="text" name="text" placeholder="Text..." required/>
        <button className="bg-red-700 bg-opacity-25 w-full hover:bg-opacity-50 transition-colors h-8" type="submit">Submit</button>
      </form>

      


      
    </div>
  )
}

export default ContactSection;