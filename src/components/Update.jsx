    import React, { useState } from 'react'

export default function Update() {
    const[val,setVal]=useState(12);

  
  return (
    <>
        {val} <br />
        <button onClick={()=>setVal(prev=> prev+2)}>Change num</button>
    </>
  )
}
