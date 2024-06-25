import { useState, useEffect, useCallback, useDebugValue } from "react";
/**
 * --------------------------------------------------------------------------------------------------------
 * useDebugValue is useful for debugging purposes. It displays a label for custom hooks in React DevTools.
 * NOTE: useDebugValue is a no-op when not in development mode.
 * NOTE: useDebugValue is only useful and visible when used as a label inside a custom hook.
 * --------------------------------------------------------------------------------------------------------
 * CAREFUL WHEN IN PRODUCTION:
 * if you use useDebugValue in a production build, make sure to add a second argument to it which is a function,
 * so that the function is only called in development mode.
 * EXAMPLE:------------------------------------------------------------------
 * useDebugValue("hi ZikaZaki", () => process.env.NODE_ENV === "development")
 * useDebugValue({ key, value }, () => process.env.NODE_ENV === "development")
 * useDebugValue(value, (v) => getValueSlowly(v))
 * --------------------------------------------------------------------------------------------------------
 */
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === "function") {
            return initialValue();
        } else {
            return initialValue;
        }
    });

    // Visible only when used as a label inside custom-hooks.
    useDebugValue("hi ZikaZaki");
    useDebugValue({ key, value });
    useDebugValue(value, v => getValueSlowly(v));

    useEffect(() => {
        if (value === undefined) return localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value, localStorage ]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}

function getValueSlowly(value) {
    for (let i = 0; i < 1000000000; i++) { }
    return value;
}
