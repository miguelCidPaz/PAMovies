import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log('fallo')
            return initialValue
        }
    })

    useEffect(() => {
        refreshValue({totalPuntuation: 0, numVotes: 0})
    },[key])

    const setValue = value => {

        try {
            setStoredValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    const refreshValue = (value) => {
        try{
            const item = localStorage.getItem(key)
            if(item){
                setStoredValue(JSON.parse(item))
                return JSON.parse(item)
            }else{
                setStoredValue(value)
                return value
            }
        }catch(error){
            console.log(error)
        }
    }

    return [storedValue, setValue, /* refreshValue */];

}