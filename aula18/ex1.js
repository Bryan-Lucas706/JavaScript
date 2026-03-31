/*
function Contagem() {
  console.log("Esperando começar...");
  setTimeout(function () {
    console.log("ATIVOU!!!");
  }, 2000); // 5 segundos
}
Contagem();
*/

function ativar(){
    setInterval(function(){
        console.log('oi')
    }, 2000)
}

ativar()