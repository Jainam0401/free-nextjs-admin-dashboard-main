import React from 'react'

const objects = [  
  [
    "total_Shipments",
    "pickup_Pending",
    "in_Transit",
    "delivered",
    "ndr_Pending",
    "rto"
  ],
]

const Maincard = () => {
  return (
    <div className='md:w-[80%]'>
      <div className='bg-white m-2 py-5 rounded-lg shadow-md shadow-slate-400'>
        <div className='flex justify-between px-3'>
          <p className='font-bold text-black'>Shipments Details</p>
          <p>Last 30 days</p>
        </div>
          { 
            objects.map((itemArray, index) => ( 
              <div className='grid justify-evenly grid-cols-2 sm:grid-cols-6 text-center' key={index}>
                {itemArray.map((item, i) => (
                  <div className='inline-block my-2' key={i}>
                    <div className='bg-slate-200 w-[50px] h-[50px] flex justify-center items-center rounded-md m-auto'>0</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div> 
            ))
          }
      </div>
    </div>
  )
}

export default Maincard
