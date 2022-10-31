import './Relogio.css';
import { React, useEffect, useState } from "react"

function Relogio() {
  const [hora, setHora] = useState();
  const [minuto, setMinuto] = useState();
  const [segundo, setSegundo] = useState();

  const filtro = valor => 10 > valor ? "0" + valor : valor;

  var data = new Date();
  useEffect(() => {

    const interval = setInterval(() => {

      setHora(filtro(data.getHours()));
      setMinuto(filtro(data.getMinutes()));
      setSegundo(filtro(data.getSeconds()));

    }, 1000);

    return () => clearInterval(interval);

  });

  return (

    <h2 className='digital col'> {hora}:{minuto}:{segundo} </h2>

  );
}

export default Relogio;
