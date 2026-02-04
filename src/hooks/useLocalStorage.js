import { useState } from "react"

export function useLocalStorage(key, value) {
    const [state, setState] = useState({})

    function setter() {
        localStorage.setItem(key, value)
        setState({
            key,
            value
        })
    }

    function getter() {
        return state.value
    }

    return { setter, getter }
}
