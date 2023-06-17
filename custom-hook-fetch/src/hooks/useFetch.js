import { useCallback, useEffect, useState } from "react";

export const useFetch = ( endpoint ) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/';
    const url = apiUrl+endpoint;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error('Error at cosuming ' + url);
            const data = await response.json();
            setData(data);
            setError(null);
        } catch(error){
            setError(error.message);
            setData([]);
        }finally{
            setLoading(false);
        }
    }, [])

    useEffect( () => {
        console.log('use effect');
        fetchData([]);
    }, []);

    return { data, loading, error };
}
