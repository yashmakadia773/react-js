
import React, { useState } from 'react'
import { useEffect } from 'react'
const Effect = () => {

  const [data, setdata] = useState(0);
  const [val, setval] = useState("");

  useEffect(()=>{
    console.log("use Effect start");

    setTimeout(() => {
      setdata(data+1);
    }, 1000);
  })
  return (
    <>
     <h1>{data}</h1>
     <h1>{val}</h1>
      <button onClick={()=>setval("yash")}>add</button>
    </>
  )
}

export default Effect