import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        isError: false,
        message: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios(url);
                setData(res.data);
            } catch (err) {
                setError({
                    isError: true,
                    message: err.message
                })
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000)
            }
        }
        fetchData();
    }, [url]);

    return { data, isLoading, error };
}

export default useAxios;