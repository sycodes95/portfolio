

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
    p-2 m-2
    bg-black bg-opacity-25
    text-white
    rounded-sm
    w-full
    flex flex-col 
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
          <button className=" bg-red-800 w-full text-sm text-white text-opa font-black-outline-light
          hover:bg-red-700
          
          
          transition-all
          rounded-sm
          "
          onClick={handleViewSite}
          >VIEW SITE</button>
        </div>
        <div className="flex justify-center w-1/2 ">
          <button className=" bg-green-400 h-8 w-full text-sm text-white font-black-outline-light
            hover:bg-green-300
            
            
            transition-all
            rounded-sm
          ">VIEW CODE</button>
        </div>

      </div>
    </div>
  )
}

export default Detail;