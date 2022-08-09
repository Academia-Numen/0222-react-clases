import { useEffect, useReducer } from "react";

const useLocalStorage = (reducer, initialState, key) => {
    function inicializacionDiferida() {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : initialState;
    }
    const [data, dispatch] = useReducer(reducer, initialState, inicializacionDiferida);

    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem(key, stringifiedData);
    }, [data, key]);

    return { data, dispatch };
}

export default useLocalStorage;