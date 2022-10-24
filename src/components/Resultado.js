import './Resultado.css';
import { React } from "react"

function Resultado(props) {
  let valores = props.valores;

  return (

    <h2> { valores.map((num) => { return num + " " }) } </h2>

  );
}

export default Resultado;
