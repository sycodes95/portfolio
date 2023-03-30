

import Demo from "./demo";
import Detail from "./details";
import Feature from "./feature";

function ProjectOne () {
  /*
  const detailRef = useRef(null)
  const featureRef = useRef(null)
  const projectRef = useRef(null)
  
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
      <div className="h-12 w-full bg-black bg-opacity-30 col-span-4 text-white font-black-outline-light">
        yo
      </div>
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