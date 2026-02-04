import React, { useState } from 'react'

const ArrayOrders = () => {
    const [state, setState] = useState([1, 2, 3])
    return (
        <>
            <ol>
                {
                    state.map((curr) => (
                       <Li curr={curr} />
                    ))
                }
            </ol>
            <button onClick={() => {
                setState([...state].reverse())
            }}>
                Reverse
            </button>
        </>
    )
}

export default ArrayOrders

function Li({ curr }) {
    const [input, setInput] = useState("")
    console.log(curr, input)
    return (
        <li key={curr}>
            {curr}
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
        </li>
    )
}