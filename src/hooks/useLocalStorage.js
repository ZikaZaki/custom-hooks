import { useState, useEffect, useCallback, useDebugValue } from "react"

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useDebugValue(value) // Can be useful only inside custom-hooks

    useEffect(() => {

        if (value === undefined) return localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value, localStorage ])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}