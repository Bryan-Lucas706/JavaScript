const btnContar = document.getElementById("btnContar");

function count(event) {
  event.preventDefault();

  const end = Number(document.getElementById("fim").value);
  const step = Number(document.getElementById("passo").value);
  let start = Number(document.getElementById("inicio").value);
  let response = document.getElementById("resultado");

  if (step === 0) {
    alert("Passo invalido! Corrija para proceguir");
    return
  }

  response.textContent = "";

  for (start; start <= end; start += step) {
    response.textContent += `${start} 👉 `;
  }
  response.textContent += "🏁";
}

btnContar.addEventListener("click", count);
