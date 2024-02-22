import { useCallback } from 'react'
import url from '../url';

const useFetch = () => {
    const sendRequest = useCallback(async (path, method, body = {}, callbackFn) => {
        const res = await fetch(url+path, {
            method: method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        const json = await res.json();
        callbackFn(json, res.status);
        
    }, []);

    return {sendRequest}    
}

export default useFetch;
