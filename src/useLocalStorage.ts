import { useState, useCallback } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
    try {
        const item = window.localStorage.getItem(key);
        return item !== null ? (item as T) : initialValue;
    } catch (error) {
        console.log(error);
        return initialValue;
    }
    });

    const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, typeof valueToStore === 'string' ? valueToStore : JSON.stringify(valueToStore));
    } catch (error) {
        console.log(error);
    }
    }, [key, storedValue]);

    return [storedValue, setValue];
}

export default useLocalStorage;
