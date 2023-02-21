

function Detail () {
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
    <div className='DETAIL 
    ml-2 mt-2 mb-2 p-2
    bg-black bg-opacity-25
    text-white
    rounded-sm
    w-full
    flex flex-col justify-between
    bg-striped-2
    '>
      <div className=
      'text-md text-center font-bold pb-2'
      >
        <span>TRADING JOURNAL APP</span>
      </div>
      
      <div className=
      'text-xs text-center text-red-500'
      >
        <em>BUILT TO HELP TRADERS FIND, EXECUTE, AND REFINE THEIR EDGE USING STATISTICS IN ORDER TO INCREASE PROFITABILITY IN THE FINANCIAL MARKETS.</em>
      </div>
      {
       
      <div className='TOOLS-CONTAINER
      m-2 p-2 bg-black bg-opacity-25 rounded-sm
      
      '>

        <div className='text-md text-center pb-4 font-bold'>
          <span>TOOLS USED</span>
        </div>

        <div className='TOOLS text-xs text-center text-red-500 grid gap-y-2   '>

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
      
      }
      <div className='LINKS 
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
    </div>
  )
}

export default Detail;