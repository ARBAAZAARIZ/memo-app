import React, { memo, useRef } from 'react'

 function Display() {
    let userefData=useRef(0)
    console.log(userefData);
    
  return (
    <div>
      <h1>`i am div h1 {userefData.current ++}`</h1>
    </div>
  )
}
export default memo(Display)
