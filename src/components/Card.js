
export default function Card(props) {
    const { nombre, label } = props;

    return (
        <li>
            <span>{nombre}---</span>
            <span>{label}</span>
        </li>
    )
}
