
function Feature () {
  const featuresElements = [
    'VIEW OVERALL PERFORMANCE BY NET PROFIT / LOSS, AS WELL AS R MULTIPLE.',
    '> USE ADVANCED GRAPH SCATTER CHART, TO SEE HOW WELL TRADES WITH SPECIFIC ATTRIBUTES PERFORM USING Y AXIS AS WIN RATE, AND X AXIS AS THE R MULTIPLE',
    '> CREATE, EDIT, DELETE TRADES USING THE JOURNAL TAB.',
    '> ABILITY TO SORT JOURNAL TABLE USING A SEARCH BOX, OR BY CLICKING ON ANY TABS SUCH AS, DATE, GAIN/LOSS, SETUP TYPE, ETC...',
    '> CREATE, EDIT, AND DELETE SETUPS, INSTRUMENTS, OR CUSTOM VARIABLES',
    
  ]
  return (
    <div className='FEATURE
      p-2 m-2
      bg-black bg-opacity-25 
      rounded-sm
      bg-striped-2
      flex flex-col 
      '
    >  
      <div className='text-md text-center  font-bold text-white'>FEATURES</div>

      
        <div className='text-xs text-white font-black-outline-light grid gap-y-2 p-2 h-full w-full'>
        
          <div className='bg-black bg-opacity-25 rounded-sm p-1 h-fit'>
            <span className="text-green-300 font-bold text-md">STATISTICS : </span>
            <span>View overall performance by Profit / Loss, as well as R multiple & more...</span>
          </div>

          <div className='bg-black bg-opacity-25 rounded-sm p-1 h-fit'>
            <span className="text-green-300 font-bold text-md">DATA VISUALIZATION : </span>
            <span>Use the advanced scatter chart, to see how well trades with specific variables perform using y axis as win rate, and x axis as the r multiple.</span>
          </div>

          <div className='bg-black bg-opacity-25 rounded-sm p-1 h-fit'>
            <span className="text-green-300 font-bold text-md">FILTER : </span>
            <span>Filter through trades using a search box, or by clicking on any tabs in the journal table such as, entry date, gain/loss, setup type, & more...</span>
          </div>

          <div className='bg-black bg-opacity-25 rounded-sm p-1 h-fit'>
            <span className="text-green-300 font-bold text-md">CRUD : </span>
            <span>Manage, update, and customize trades, instruments, setups, and variables.</span>
          </div>
          
          
        </div>

      
      
      

     
      
      
    </div>
  )
}

export default Feature;