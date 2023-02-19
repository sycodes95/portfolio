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
    <section className="content-con max-h-screen grid bg-dev corners">

      <div className="bg-dev-centered-reversed flex justify-center items-center h-screen w-full ">

        <div className="absolute h-full w-full max-w-full flex justify-center overflow-hidden">
          <img
            className="absolute top-neg-20 pointer-events-none"
            src={bulb}
            ref={bulbRef}
            alt=''
          />
        </div>

        <div className="border-opacity-0 flex flex-col justify-center text-center">
          <span className="font-shadow-white-light text-white">
            Kevin <span className="">S.Y</span> Kim
          </span>
          <span className="font-shadow-white-light text-white ">
            Fullstack Developer.
          </span>
        </div>

      </div>

    </section>
  );
}

export default HomeSection;
