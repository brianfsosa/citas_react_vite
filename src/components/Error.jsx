import React from 'react'

function Error({mensaje}) {
  return (
            <div className='bg-red-700 text-white text-center uppercase mb-3 p-3 rounded-md font-bold'>
                <p>{mensaje}</p>
            </div>
  )
}

export default Error