import './App.css';
import { React, useState } from "react"
import Resultado from './Resultado';
import Aleatorio from '../Aleatorio';
import Entrada from './Entrada';

function App() {
  const [Numeros, SetNumeros] = useState([]);
  const [qntSorteios, setQntSorteios] = useState(1);
  const [de, setDe] = useState(1);
  const [ate, setAte] = useState(100);

  const Sortear = () => {SetNumeros(Aleatorio(de, ate + 1, qntSorteios - 1));}

  const Regras = valor => (100 < valor && (valor = 100), 1 > valor && (valor = 1), valor);

  return (
    <div className='painel'>
      <form className='glass'>
        <Entrada txt="Sorteios" defValue={1} txthelp="Quantidade de sorteios"
          onChange={(evt) => { setQntSorteios(Regras(evt.target.value)) }} />

        <Entrada txt="De" defValue={1} txthelp="Valor mínimo"
          onChange={(evt) => { setDe(Regras(evt.target.value)) }} />

        <Entrada txt="Até" defValue={100} txthelp="Valor mínimo"
          onChange={(evt) => { setAte(Regras(evt.target.value)) }} />

        <input onClick={() => Sortear()} type="button" value="SORTEAR NÚMERO" />
      </form>

      <div className='glass row'>
        <Resultado valores={Numeros} />
      </div>
    </div>
  );
}

export default App;