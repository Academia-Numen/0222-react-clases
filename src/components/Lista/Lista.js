import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../Card";

const selectData = [
    { value: 'Arabia Saudita', label: 'Arabia Saudita' },
    { value: 'México', label: 'México' },
    { value: 'Polonia', label: 'Polonia' },
];

const Lista = () => {
    const [option, setOption] = useState(false);
    const { data: posts, isLoading: isPostsLoading, error: postsError } =
        useAxios('http://localhost:8000/team');

    const selectHandler = (e) => {
        setOption(e.target.value);
    }

    return (
        <>
            <h2>Seleccion Argentina</h2>

            <form>
                <label htmlFor="matches">Selecciona un Rival:</label>
                <select 
                    name="matches" 
                    id="matches"
                    defaultValue=""
                    onChange={selectHandler}
                >
                    <option value="" disabled>Selecciones: </option>

                    { selectData.map((optionData, index) => (
                        <option value={optionData.value} key={index}>
                            { optionData.label }
                        </option>
                    ))}
                </select>
            </form>

            <ul style={{
                display: 'flex',
                gap: '1rem',
                listStyle: 'none',
            }}>
                {postsError.isError ? <h4>Error: {postsError.message}</h4> :

                    isPostsLoading ? <h4>Cargando...</h4> :

                        posts.length !== 0 &&

                        posts.matches.map(item => (
                            <Card 
                                key={item.id} 
                                rival={item.rival}
                                img={item.img}
                                date={item.date}
                                day={item.day}
                                time={item.time}
                                stadium={item.stadium}
                                option={option}
                            />
                        ))
                }
            </ul>
        </>
    )
}

export default Lista;
