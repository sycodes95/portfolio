
import { ReactSVG } from "react-svg";
import triangledots from "../../icons/triangledots.svg"
import silhoutte from "../../images/silhoutte.png"
import Icon from '@mdi/react';
import { mdiDna } from '@mdi/js';

<Icon path={mdiDna} size={1} />

function AboutSection () {
  
  

  

  return (
    <section className='ABOUT-SECTION pb-96 pt-12 gap-y-12'>

      <div className="
       row-span-1 col-span-2 row-start-1 
       flex justify-center items-center 
       mb-4
       
       rounded-sm h-12">
        
        <div className="ICON-CONTAINER bg-black bg-opacity-25 h-full w-full flex items-center border-2 border-black bg-striped">
          <div className="flex justify-start ml-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md" path={mdiDna} size={1.5} />
          </div>

          <div className="flex justify-center ml-2 w-full font-bold font-black-outline-light text-red-700 text-opacity-70 text-xl">
            <span>A B O U T</span>
          </div>

          <div className="flex justify-end mr-2 w-fit">
            <Icon className=" text-red-700 text-opacity-50 bg-black bg-opacity-20 rounded-md flip" path={mdiDna} size={1.5} />
          </div>
          
          
        </div>
        
        
      </div>

      <div className="grid grid-cols-2 bg-black bg-opacity-25">
        <div className="col-span-1 m-2 p-2 bg-black bg-opacity-25 flex justify-center">
          <img className="SILHOUTTE " src={silhoutte}/>
        </div>
        <div className="col-span-1"></div>

      </div>
     

    </section>

  )
}

export default AboutSection;