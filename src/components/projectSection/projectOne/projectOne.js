import dummyimage from "../../../images/dummyimage.png"

function ProjectOne () {

  const featuresElements = [
    '> VIEW OVERALL PERFORMANCE BY NET PROFIT / LOSS, AS WELL AS R MULTIPLE.',
    '> USE ADVANCED GRAPH SCATTER CHART, TO SEE HOW WELL TRADES WITH SPECIFIC ATTRIBUTES PERFORM USING Y AXIS AS WIN RATE, AND X AXIS AS THE R MULTIPLE',
    '> CREATE, EDIT, DELETE TRADES USING THE JOURNAL TAB.',
    '> ABILITY TO SORT JOURNAL TABLE USING A SEARCH BOX, OR BY CLICKING ON ANY TABS SUCH AS, DATE, GAIN/LOSS, SETUP TYPE, ETC...',
    '> CREATE, EDIT, AND DELETE SETUPS, INSTRUMENTS, OR CUSTOM VARIABLES',
    '> USERS CAN DRAG AND DROP CUSTOM VARIABLES TO REORDER IT UNDER THE VARIABLE GROUP',
  ]

  const toolsElements = [
    {
      jsx: <i class="devicon-javascript-plain text-4xl  fill-current "></i>,
      name: 'Javascript'
    },
    {
      jsx: <i class="devicon-react-original text-4xl  fill-current "></i>,
      name: 'React'
    },
    {
      jsx: <i class="devicon-tailwindcss-plain text-4xl  fill-current "></i>,
      name: 'Tailwind'
    },
    {
      jsx: <i class="devicon-nodejs-plain text-4xl  fill-current "></i>,
      name: 'Node JS'
    },
    {
      jsx: <i class="devicon-express-original text-4xl  fill-current "></i>,
      name: 'Express'
    },
    {
      jsx: <i class="devicon-mongodb-plain-wordmark text-4xl  fill-current "></i>,
      name: 'Mongo DB'
    },
  ]

  const handleViewSite = () =>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  return (

    <div className='bg-dev'>

      <section className='PROJ-CONTAINER
       ml-12 mr-12 border border-black border-opacity-25
        bg-black bg-opacity-25
         text-white  
         rounded-sm  min-w-fit
         grid
       '>

        <div className='TITLE
        bg-striped-content-red bg-opacity-50 rounded-sm bottom-left-round  bottom-right-round
        font-black-outline-light text-center
        col-span-4'>

          <span>EDGE SCOUT</span>

        </div>

        <section className="DETAILS col-start-1 col-span-1">

          <div className='DETAIL 
          m-2 p-2 bg-black bg-opacity-25 rounded-sm
          '>

            <div className='text-md text-center pb-4 font-bold'>
              <span>TRADING JOURNAL APP</span>
            </div>
            <div className='text-xs text-center text-red-500'>
              <em>BUILT TO HELP TRADERS FIND, EXECUTE, AND REFINE THEIR EDGE USING STATISTICS IN ORDER TO INCREASE PROFITABILITY IN THE FINANCIAL MARKETS.</em>
            </div>
            
          </div>
          
          <div className='FEATURE
          m-2 p-2 bg-black bg-opacity-25 rounded-sm
          '>

            <div className='text-md text-center pb-4 font-bold'>FEATURES</div>
            <ul className='text-xs text-yellow-200 font-black-outline-light grid gap-y-2'>
              {
                featuresElements.map(feature => (
                  <li className='bg-black bg-opacity-50 rounded-sm p-1'>{feature}</li>
                ))
              }
            </ul>
          </div>

          <div className='TOOLS 
          m-2 p-2 bg-black bg-opacity-25 rounded-sm
          '>

            <div className='text-md text-center pb-4 font-bold'>
              <span>TOOLS USED</span>
            </div>

            <div className='text-xs text-center text-red-500 grid grid-cols-3 gap-y-2  pl-10 pr-10'>

              {
                toolsElements.map(tools =>(
                  <div className='flex flex-col gap-y-1 text-white font-black-outline-light col'>
                    {tools.jsx}
                    <span>{tools.name}</span>
                  </div>
                ))
              }
              
            </div>

          </div>

          <div className='LNKS 
          m-2 p-2 bg-black bg-opacity-25 rounded-sm
          
          flex  gap-x-4
          '>
            <div className="flex justify-center w-1/2 ">
              <button className=" border border-red-700 w-full text-sm 
              hover:bg-red-700
              hover:text-black 
              hover:font-bold
              transition-all
              top-left-round
              bottom-right-round
              "
              onClick={handleViewSite}
              >VIEW SITE</button>
            </div>
            <div className="flex justify-center w-1/2 ">
              <button className=" border border-yellow-700 h-8 w-full text-sm
                hover:bg-yellow-700
                hover:text-black 
                hover:font-bold
                transition-all
                top-left-round
                bottom-right-round
               ">VIEW CODE</button>
            </div>
            
          </div>
        </section>

        <section className="col-span-3 pt-2 pr-2 pb-2">
          <div className="h-full bg-black bg-opacity-25 flex justify-center items-center overflow-hidden">
            <img className="bg-center" src={dummyimage}/>
          </div>
        </section>

      </section>
    </div>

  )
}

export default ProjectOne;