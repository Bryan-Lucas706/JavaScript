const btnGerar = document.getElementById("btnGerar");

function gerarTabuada(event) {
  event.preventDefault();

  const numero = document.getElementById("numero").value;
  const tabuada = document.getElementById("tabuada");

  if (numero.length == 0) {
    alert("Operação invalida. Preencha o campo");
    return;
  }

  tabuada.innerHTML = ''

  for (let i = 1; i <= 10; i++) {
    tabuada.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
}

btnGerar.addEventListener("click", gerarTabuada);
