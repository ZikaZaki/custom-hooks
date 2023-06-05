import { useState, useEffect, useCallback, useDebugValue } from "react"
/**
 * useDebugValue is useful for debugging purposes. It displays a label for custom hooks in React DevTools.
 * NOTE: useDebugValue is a no-op when not in development mode.
 * NOTE: useDebugValue is only useful and visible when used as a label inside a custom hook.
 */
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

    useDebugValue([key, value]) // Can be useful only inside custom-hooks

    useEffect(() => {

        if (value === undefined) return localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value, localStorage ])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}