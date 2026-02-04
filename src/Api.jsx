import React, { useState } from 'react'

const Api = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  function apiCall() {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>response.json())
    .then((json)=>{
        setData(json)
        setLoading(false)
    })

    console.log(data)
  }

  return (
    <div>
        <button onClick={apiCall}>{
            loading ? "Fetching ..." : "Fetch"
            }</button>
    </div>
  )
}

export default Api