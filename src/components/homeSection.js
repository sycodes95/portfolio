import { useRef, useEffect } from "react";
import bulb from '../images/bulb.png'


function HomeSection() {

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

  const bulbRef = useRef(null);
  return (
    <section className="content-con max-h-screen w-full grid corners">

      <div className=" flex justify-center items-center h-screen w-full ">

        <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden ">
          <img
            className="absolute top-neg-20 pointer-events-none"
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
        
        "
        >
          <div className="p-2 bg-black bg-opacity-10 flex items-end gap-x-2 ">
            <h2 className=" text-white text-opacity-75 text-4xl text-bg font-bold">
              Kevin Kim
            </h2>
            <span className=" text-red-700 text-opacity-70 font-bold ">
              Fullstack Developer.
            </span>
          </div>
          
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
