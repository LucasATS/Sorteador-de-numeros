import './App.css';
import { React, useState } from "react"
import Resultado from './Resultado';
import Aleatorio from '../Aleatorio';
import Entrada from './Entrada';
import Relogio from './Relogio';

function App() {
  const [Numeros, SetNumeros] = useState([]);
  const [qntSorteios, setQntSorteios] = useState(1);
  const [de, setDe] = useState(1);
  const [ate, setAte] = useState(10);

  const Sortear = () => { SetNumeros(Aleatorio(de, ate, qntSorteios)); }

  // Se um valor for maior que 100 ele retornara 100
  const Regras = valor => (100 < valor && (valor = 100), 0 > valor && (valor = 0), valor);

  return (
    <div>

      <div className='painel glass'>
        <form>
          <Entrada txt="Sorteios" defValue={1} txthelp="Quantidade de sorteios"
            onChange={(evt1) => { setQntSorteios(Regras(evt1.target.value)) }} />

          <Entrada txt="De" defValue={1} txthelp="Valor mínimo"
            onChange={(evt2) => { setDe(Regras(evt2.target.value)) }} />

          <Entrada txt="Até" defValue={10} txthelp="Valor máximo"
            onChange={(evt3) => { setAte(Regras(evt3.target.value)) }} />   

          <input onClick={() => Sortear()} type="button" value="SORTEAR NÚMERO" />
        </form>

        <div>
          <Resultado valores={Numeros} />
        </div>
      </div>

      <div className='Relogio glass col'>
        <Relogio />
      </div>

    </div>

  );
}

export default App;