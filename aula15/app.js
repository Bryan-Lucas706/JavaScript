let num = [5, 8, 9, 2, 3];
num.push(7);

console.log(num);
console.log(`Assim fica o vetor organizado ${num.sort()}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let posicao = num.indexOf(8)
let msg = posicao  == -1 ? 'Não achamo ;-;' : `Achamo, ta na posição ${posicao}`;
console.log(msg);
