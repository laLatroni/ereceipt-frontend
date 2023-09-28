import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchHook = (url) => {
    const [records,setRecords] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    

    useEffect(() => {
        const abortCont = new AbortController();
        const signal = abortCont.signal;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await axios.get(url,{ signal });
                setRecords(data.data);
                console.log(data.data);
                setIsLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();

        return () => abortCont.abort();
    },[])

    return { records,isLoading }

}