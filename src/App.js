
import React, { useState,useEffect } from 'react'
import { axios } from 'axios'
const Body = () => {
    const[data,setData]=useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
         .then (res=>setData(res.data))
  },[])
  return (
    <div> 
    {data.map(item=>
      <li >{item.title}</li>
    )}
     

    </div>
  )
}

export default Body