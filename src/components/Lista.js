import Card from "./Card";

const Lista = (props) => {

    return (
        <>
            <h2>Lista de {props.tituloDeLista}</h2>
            <ul>
                {props.contenido.map(serie => (
                    <Card 
                        key={serie.id}
                        nombre={serie.nombre}
                        label={serie.label}
                    />
                ))}
            </ul>
        </>
    )
}

export default Lista;
