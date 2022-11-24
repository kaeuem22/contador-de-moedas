document.onkeydown = checkKey;
let resultado = document.getElementById("dinheiro");

let valorAtual = 0;
let valorAnterior = 0;

function contarMoedas(valorMoeda) {
  valorAnterior = valorAtual;

  valorAtual = valorAtual + valorMoeda;

  resultado.innerHTML = `R$ ${valorAtual.toFixed(2)}
  <br>
  <br>
  <span>Valor antereior: R$ ${valorAnterior.toFixed(2)}</span>`;
  document.getElementById("ultimoValorSelecionado").innerHTML = `<span>Último valor selecionado: R$ ${valorMoeda.toFixed(2)}</span>`;

  if(valorMoeda <= 0.01){
    document.getElementById('resetButton').classList.add("blocked");
  }
  else if(valorMoeda >= 0.04){
    document.getElementById('resetButton').classList.remove("blocked");
  }
}

function reset() {
  valorAtual = valorAnterior;

  contarMoedas(0);
}

function limpar() {
  valorAtual = 0;

  contarMoedas(0);
}

function checkKey(e) {
  e = e || window.event;

  switch (e.keyCode) {
    case 49:
      contarMoedas(1);
      break;
    case 50:
      contarMoedas(0.25);
      break;
    case 53:
      contarMoedas(0.5);
      break;
    case 48:
      contarMoedas(0.1);
      break;
    case 57:
      contarMoedas(0.05);
      break;
    case 82:
      reset();
      break;
    case 67:
      limpar();
      break;
  }
}
