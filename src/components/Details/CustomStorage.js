import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue, refresh) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            console.log(refresh)
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    useEffect(() => {
        console.log(refresh)
    },[key])

    const setValue = (value) => {
        try {
            setStoredValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setValue];

}