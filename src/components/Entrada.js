import './Entrada.css';

function Entrada(props) {
  let txt = props.txt;
  let defValue = props.defValue;
  let txthelp = props.txthelp;
  let change = props.onChange;

  return (
    <div>
      <label htmlFor={txt}>{txt}</label>
      <input type="number" defaultValue={defValue} onChange={change} placeholder={txthelp} id={txt} />
    </div>
  );
}

export default Entrada;
