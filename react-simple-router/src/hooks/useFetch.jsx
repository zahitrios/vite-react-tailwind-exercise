import { useEffect, useState, useCallback } from "react";

const useFetch = (endpoint) => { 

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://jsonplaceholder.typicode.com/' + endpoint 

    const fetchData = useCallback(async () => {
        setLoading(true);
        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error('Error fetching data');
            const data = await response.json();
            setData(data);

        }catch(error){
            setData([]);
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    return {data, loading, error}
}

export default useFetch;