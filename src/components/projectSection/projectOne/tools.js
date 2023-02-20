function Tools () {
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

  

  return (
    

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

      
    
  )
}

export default Tools;