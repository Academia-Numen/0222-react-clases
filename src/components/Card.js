
export default function Card(props) {
    const { nombre, label, eliminar, id } = props;

    return (
        <li onClick={() => eliminar(id)}>
            <span>{nombre}---</span>
            <span>{label}</span>
        </li>
    )
}
