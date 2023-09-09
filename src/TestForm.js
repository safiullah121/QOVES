import React, { useState } from 'react'

const TestForm = () => {
  const [userData, setuserData] = useState({
    Name:'',
    email:'',
    password:'',
  });
  
    const handlechange = (e) => {
      setuserData((previousData)=>{
        return {
         ...previousData,
         [e.target.name]:e.target.value
        }
      })
    }
console.log(userData)
  return (
    <div className='flex flex-col w-[250px] gap-[20px]'>
       <input name='email'  onChange={handlechange}  type="text" className='border-2 border-solid border-slate-600 rounded-[5px] pl-[4px]'/>
       <input name='Name' onChange={handlechange}  type="text" className='border-2 border-solid border-slate-600 rounded-[5px] pl-[4px]'/>
    </div>
  )
}

export default TestForm
