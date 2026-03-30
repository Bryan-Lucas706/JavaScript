const form = document.querySelector("form");
const divList = document.getElementById("lista");
const btnFinalizar = document.getElementById("btnFinalizar");
const btnLimpar = document.getElementById("btnLimpar");
const response = document.getElementById("resultado");

let list = [3, 5, 7, 8, 1, 9];

function finish() {
  const menorNum = Math.min(...list);
  const maiorNum = Math.max(...list);
  const media = Math.round(somar() / list.length);

  response.innerHTML += `<p> Ao todo, temos ${list.length} números cadastrados.</p>`;
  response.innerHTML += `<p> O menor valor informado foi ${menorNum}.</p>`;
  response.innerHTML += `<p> O maior valor informado foi ${maiorNum}.</p>`;
  response.innerHTML += `<p> Somando todos os valores, temos ${somar()}.`;
  response.innerHTML += `<p> A média dos valores é ${media}.</p>`;
}

function somar() {
  let soma = 0;
  for (let num in list) {
    soma += list[num];
  }
  return soma;
}

function clearList() {
  divList.innerHTML = "";
  response.innerHTML = "";
  list = [];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const num = Number(document.getElementById("numero").value);

  if (list.indexOf(num) === -1) {
    list.push(num);
    divList.innerHTML += `<li>Valor ${num} adicionado.</li>`;
  } else {
    alert("Esse numero já existe na lista");
  }
  // Limpar
  document.getElementById("numero").value = "";
  response.innerHTML = "";
});

btnFinalizar.addEventListener("click", finish);
btnLimpar.addEventListener("click", clearList);
