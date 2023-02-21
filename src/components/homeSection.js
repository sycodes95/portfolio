import { useRef, useEffect } from "react";
import bulb from '../images/bulb.png'


function HomeSection() {

  const bulbRef = useRef(null);

  const introRef = useRef(null)

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

  useEffect(() => {
    bulbRef.current.classList.add('TOP-BULB')
    bulbRef.current.classList.remove('-top-3/4')
  }, []);

  useEffect(() => {
    introRef.current.classList.add('opacity-100')
    introRef.current.classList.remove('opacity-0')
  }, []);

  
  return (
    <section className="content-con max-h-screen w-full grid corners">

      <div className=" flex justify-center items-center h-screen w-full ">

        <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden ">
          <img
            className="absolute -top-3/4 pointer-events-none BULB"
            src={bulb}
            ref={bulbRef}
            alt=''
          />
        </div>

        <div className="
        absolute left-2/4 -translate-x-1/2 
        p-2 
        bg-black bg-opacity-25 shadow-2xl
        rounded-sm min-w-max
        flex justify-center flex-shrink
        opacity-0 transition-opacity delay-500 duration-1000
        "
        ref={introRef}
        >
          <div className=" p-2 bg-black bg-opacity-10 flex items-end gap-x-2">
            
            <span className="text-white text-opacity-75 font-bg-gradient font-bold text-3xl INTRO-NAME" >
              Kevin Kim
            </span>
            <div className="">
              <span className="items-end text-red-700 text-opacity-70 font-bold INTRO-DEV " >
                Fullstack Developer.
              </span>
            </div>
            
          </div>
          
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
