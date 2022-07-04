
const Text = (props) => {

    const { type, color, content } = props;

    const estilos = {
        color: color || '',
    };

    if (type === 'p') return <p style={estilos}>{content}</p>
    if (type === 'h1') return <h1 style={estilos}>{content}</h1>
    if (type === 'h2') return <h2 style={estilos}>{content}</h2>
    return <h3 style={estilos}>{content}</h3>
} 

export default Text;