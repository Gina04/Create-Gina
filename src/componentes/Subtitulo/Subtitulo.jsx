import Proptype from "prop-types";
import './Subtitulo.css';
function Subtitulo(props){
    return(
        <div className="contenedor-subtitulo">
            <h1>{props.texto}</h1>   
        </div>
        
    )
}

Subtitulo.prototype ={
    texto: Proptype.string.isRequired
}

export default Subtitulo;