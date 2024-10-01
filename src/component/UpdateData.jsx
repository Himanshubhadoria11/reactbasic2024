import React from 'react'

function UpdateData() {
    let data="pninfosys gwalior"

    //arrow function
    const updateData=()=>alert("hello")
  return (
    <>
   <h1>Company Name :{data}</h1>
   <button onClick={updateData}>update data</button>

    </>
  )
}

export default UpdateData