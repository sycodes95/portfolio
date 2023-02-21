
function Feature () {
  const featuresElements = [
    '> VIEW OVERALL PERFORMANCE BY NET PROFIT / LOSS, AS WELL AS R MULTIPLE.',
    '> USE ADVANCED GRAPH SCATTER CHART, TO SEE HOW WELL TRADES WITH SPECIFIC ATTRIBUTES PERFORM USING Y AXIS AS WIN RATE, AND X AXIS AS THE R MULTIPLE',
    '> CREATE, EDIT, DELETE TRADES USING THE JOURNAL TAB.',
    '> ABILITY TO SORT JOURNAL TABLE USING A SEARCH BOX, OR BY CLICKING ON ANY TABS SUCH AS, DATE, GAIN/LOSS, SETUP TYPE, ETC...',
    '> CREATE, EDIT, AND DELETE SETUPS, INSTRUMENTS, OR CUSTOM VARIABLES',
    
  ]
  return (
    <div className='FEATURE
      m-2 p-2 
      bg-black bg-opacity-25 
      rounded-sm
      bg-striped-2
      flex flex-col 
      '
    >  
      <div className='text-md text-center  font-bold text-white'>FEATURES</div>
      
      <ul className='text-xs text-orange-300 font-black-outline-light flex flex-col justify-center gap-y-2 p-2 w-full'>
      {
        featuresElements.map(feature => (
          <li className='bg-black bg-opacity-25 rounded-sm p-1'>{feature}</li>
        ))
      }
      </ul>

      
      
    </div>
  )
}

export default Feature;