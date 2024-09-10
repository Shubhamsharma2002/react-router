import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Shubhamsharma2002')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
    <>
    

     <div className='flex flex-row flex-wrap bg-gray-600 text-white p-2 text-3xl'>
      <div className=' flex basis-2/4 justify-center'><img className='rounded-full bg-[59%_-4px] align-item-center'  src={data.avatar_url} alt="Git picture" width={100} /></div>
      <div className='flex-initial  justify-content: flex-end;'><p className='mt-8'>Github Repositery: {data.public_repos}</p></div>
     </div>
   
    </>
   
  )
}

export default Github