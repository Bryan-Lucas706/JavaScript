const madrugada = 'https://imgs.search.brave.com/ns0AD8yy2yD7s5chdTXAlZX7UaLyCH_rM-300B4Gchw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi83/MDg2ODUyOC1jcmlh/bmNhLWNvbmZyb250/YXItZXNwZWN0cmFs/LWZpZ3VyYS1zaWxo/dWV0YS1kZW50cm8t/amFuZWxhLWR1cmFu/dGUtbm9pdGUtZ3Jh/dGlzLWZvdG8uanBn'

const nascerDoSol = 'https://imgs.search.brave.com/ODUAqJhSUi2H1OZyZcaQehtujQO3U5EPZZXamHbwpgM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/Mjc2NzQwMS9wdC9m/b3RvL2dvbGRlbi1z/dW5yaXNlLXdpdGgt/Ymx1ZS1za3ktdGhy/b3VnaC1yZWVkcy1v/Zi1sb25nLWdyYXNz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1JM3lBeXZseWZI/cFJOTVo3Yy1tMXBH/QzFCbEdwLVdhalZx/VWFqSzVPWFRJPQ'

const porDoSol = 'https://imgs.search.brave.com/MEeehbVh18h_g7YNzwzqjsX8NL8yjVKafARGmG9yig8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTA0NzkzNjg1NDIt/YzAzNzkzOWVhZDE2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5ueDhjR3hoYm04/bE1qQmtaU1V5TUda/MWJtUnZKVEl3Y0NW/RE15VkNOSElsTWpC/a2J5VXlNSE52Ykh4/bGJud3dmSHd3Zkh4/OE1BPT0'

const pracaNoite = 'https://imgs.search.brave.com/CtVlHpTY1ldfI4zNSQKc24gF6B6kilrv4utww5ptq_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTQ0NTcy/MC85NTI3L2kvNjAw/L2RlcG9zaXRwaG90/b3NfOTUyNzAwOTQt/c3RvY2stcGhvdG8t/b2xkLWV1cm9wZWFu/LWNpdHktYXQtbmln/aHQuanBn" alt="imagem de uma praça a noite'

function timeOfDay() {
  const body = document.body;
  const time = new Date();
  const currentTime = time.getHours();
  const textTime = document.getElementById("horario");
  const imageTime = document.getElementById("image-time");

  textTime.textContent = `Agora são ${currentTime} horas. `;

  if (currentTime >= 0  && currentTime < 6) {
    textTime.textContent += "Boa Madrugada";
    imageTime.innerHTML = `<img src="${madrugada}" alt="medu">`;
    body.style.backgroundImage = " linear-gradient(#0A191D, #133742)";
  }

  else if (currentTime >= 6 && currentTime <= 12) {
    textTime.textContent += "Bom dia";
    imageTime.innerHTML = `<img src="${nascerDoSol}" alt="imagem de um nascer do sol">`;
    body.style.backgroundImage = " linear-gradient(#678ca4 40%, #423609)";

  } else if (currentTime > 12 && currentTime <= 18) {
    textTime.textContent += "Boa Tarde";
    imageTime.innerHTML = `<img src="${porDoSol}" alt="imagem do por do sol">`;
    body.style.backgroundImage = " linear-gradient(#C79D6C, #B0441A)";
    
  } else{
    textTime.textContent += "Boa Noite";
    imageTime.innerHTML = `<img src="${pracaNoite}" alt="imagem de uma praça a noite">`;
    body.style.backgroundImage = "linear-gradient(#06050A, #191D25)";
  }
}

window.addEventListener("load", timeOfDay);
