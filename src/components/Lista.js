import Card from "./Card";

const Lista = (props) => {

    return (
        <>
            <h2>Lista de {props.tituloDeLista}</h2>
            <p>{ props.children }</p>
            <ul>
                {props.contenido.map((serie, index) => (
                    <Card 
                        key={serie.id}
                        nombre={serie.nombre}
                        label={serie.label}
                        id={serie.id}
                        eliminar={props.eliminar}
                    />
                ))}
            </ul>
        </>
    )
}

export default Lista;
