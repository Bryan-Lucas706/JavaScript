let carro = {
  marca: "Ford",
  modelo: "Ferrari",
  ano: 2017,
  placa: "ABC-1234",
  buzina: function () {
    console.log("BIIIIIIIIIIIIIIIIIII");
  },
  completo: function () {
    return `A marca é ${this.marca} e o modelo é ${this.modelo}`;
  },
};

console.log(carro.completo());
