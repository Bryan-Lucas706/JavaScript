class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
   
}

const uno = new Carro("Fiat", "uno", 2001);
const gol = new Carro("Volkswagem", "Gol", 2014);
console.log(gol.ano);
console.log(uno.buzina());
