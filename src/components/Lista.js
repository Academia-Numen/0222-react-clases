import axios from "axios";
import { useEffect, useState } from "react";

const Lista = () => {
    const [botonActualizador, setBotonActualizador] = useState(false);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        isError: false,
        message: '',
    });

    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [postsError, setPostsError] = useState({
        isError: false,
        message: '',
    });

    const handleClick = () => setBotonActualizador(!botonActualizador);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios('https://jsonplaceholder.typicode.com/users');
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
    }, [botonActualizador]);

    useEffect(() => {
        const fetchData = async () => {
            setIsPostsLoading(true);
            try {
                const res = await axios('http://localhost:8000/team');
                setPosts(res.data);
            } catch (err) {
                setPostsError({
                    isError: true,
                    message: err.message
                })
            } finally {
                setTimeout(() => {
                    setIsPostsLoading(false);
                }, 1000)
            }
        }
        fetchData();
    }, [botonActualizador]);

    return (
        <>
            <button onClick={handleClick}>Botón Actualizador</button>

            <ul>
                {error.isError ? <h4>Error: {error.message}</h4> :

                    isLoading ? <h4>Cargando...</h4> :

                        data.length !== 0 &&

                        data.map(item => (
                            <li key={item.id}>{item.name} --- {item.email}</li>
                        ))

                }
            </ul>

            <ul>
                {postsError.isError ? <h4>Error: {postsError.message}</h4> :

                    isPostsLoading ? <h4>Cargando...</h4> :

                        posts.length !== 0 &&

                        posts.matches.map(item => (
                            <li key={item.id}>{item.rival}</li>
                        ))
                }
            </ul>
        </>
    )
}

export default Lista;
