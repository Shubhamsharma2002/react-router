import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
  
   <>
   
   <h1 className='bg-gray-600 text-white text-3xl p-4 text-center'>User :{id}</h1>
   </>
  )
}

export default User