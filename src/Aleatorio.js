function Aleatorio(de, ate, quant) {
  let results = [];

  for (let index = 0; index <= quant; index++) {
    let valor = Math.floor((Math.random() * (ate - de)) + de);
    results.push(valor);
  }

  return results;
}

export default Aleatorio;
