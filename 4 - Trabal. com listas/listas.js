console.log("Trabalhando com listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const newYork = `New York`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `New York`
);

listaDeDestinos.push(`Los Angeles`); // o push adc elementos dentro da lista

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, newYork );

listaDeDestinos.splice(1,1); //splice exclui elementos da lista, tem que dar a posição do elemento que quer excluir + a quantidade
console.log(listaDeDestinos); 
console.log(listaDeDestinos[1]); //depois que neste caso acabou o elemento saoPaulo o 1º passa a ser o newYork, pra imprimir o elemento que eu quiser é só abrir o colchete dentro dos pareteses e colocar a posição dele.