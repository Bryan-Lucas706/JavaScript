const btnContar = document.getElementById("btnContar");
const btnClear = document.querySelector('input[type="reset"]');
let response = document.getElementById("resultado");

function count(event) {
  event.preventDefault();

  const e = document.getElementById("fim").value;
  const p = document.getElementById("passo").value;
  const s = document.getElementById("inicio").value;

  if (s.length == 0 || e.length == 0 || p.length == 0) {
    alert("Campo vazio. Preencha para proceguir");
    return;
  }

  const end = Number(e);
  const step = Number(p);
  let start = Number(s);

  response.innerHTML = "Contando: <br>";
  // Contagem crescente
  if (start < end) {
    for (start; start <= end; start += step) {
      response.innerHTML += `${start} 👉 `;
    }
  } else {
    // Contagem regressiva
    for (start; start >= end; start -= step) {
      response.innerHTML += `${start} 👉 `;
    }
  }

  response.innerHTML += "🏁";
}

function clearCount() {
  response.innerHTML = "Preparando a contagem...";
}

btnContar.addEventListener("click", count);
btnClear.addEventListener("click", clearCount);
