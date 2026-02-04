
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [date, setDate] = useState(new Date())
//   const [seconds, setSeconds] = useState(date.getSeconds())
//   const [hours, setHours] = useState(date.getHours())
//   const [minute, setMinute] = useState(date.getMinutes())

//   useEffect(()=>{
//     const timer = setInterval(()=>{
//       if(seconds === 59) {
//         setSeconds(0)
//         setMinute((prev)=>prev+1)
//       }
//       if(minute >= 59) {
//         setMinute(0)
//         setSeconds(0)
//         setHours((prev)=>prev+1)
//       }
//       if(hours >= 23) {
//         setMinute(0)
//         setHours(0)
//         setSeconds(0)
//       }
//       if(seconds >= 3599 && seconds % 59 === 0) {
//         setSeconds(0)
//         setHours((prev)=>prev+1)
//         setMinute((prev)=>prev+1)
//       }
//       setSeconds((prev)=>prev+1)
//     }, 1000)

//     return()=>{
//       clearInterval(timer)
//     }
//   },)
//   return (
//     <div>
//       {hours} : {minute} : {seconds}
//     </div>
//   )
// }

// export default App


import { useEffect } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import ArrayOrders from "./ArrayOrders"
import Api from "./Api"

const App = () => {
  const {setter, getter} = useLocalStorage("key1", 45)
  
  useEffect(()=>{
    setter()
  }, [])
  
  return (
    <div>
      {/* {getter()} */}
      {/* <ArrayOrders /> */}
      <Api />
    </div>
  )
}

export default App