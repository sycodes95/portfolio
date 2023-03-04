
import { useRef, useState } from "react";
import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";
import Tools from "./tools";
import edgescoutPNG from "../../../images/edgescout.png"
function ProjectOne () {
  const detailRef = useRef(null)
  const featureRef = useRef(null)
  const projectRef = useRef(null)
  /*
  useEffect(() => {
    if(aboutSectionRef.current) {
      

      const options = {
        root: null,
        threshold: 0.2,
      };
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutContentRef.current.classList.add('top-0');
            aboutContentRef.current.classList.remove('-top-full');
            
          } else {
            aboutContentRef.current.classList.add('-top-full');
            aboutContentRef.current.classList.remove('top-0');
            
          }
        });
      }, options);
      
      observer.observe(aboutSectionRef.current);
      
      // Clean up the observer when the component unmounts
      return () => observer.unobserve(aboutSectionRef.current);

    }
    
  }, []);
  */
  
  return (
    <div className='PROJECT-CONTAINER 
    bg-black bg-opacity-25 grid gap-y-2'
    >
      <div className="DEMO"> 
        
        <Demo/> 
      </div>
      <div className="DETAIL flex flex-grow z-30 -left-1/2">
        <Detail/>
      </div>
      <div className="FEATURE flex flex-grow z-30">
        <Feature/>
      </div>
       
    </div>

  )
}

export default ProjectOne;