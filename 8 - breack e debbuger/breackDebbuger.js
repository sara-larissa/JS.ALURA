console.log("\n Breack and Bebbuger");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `New York`
);

const idadeDoComprador = 18;
const pessoaEstaAcompanhada = true;
let temPassagemComprada = false; //começa com falso e se conseguir comprar vira true
const destino = "New York";

console.log("\n Destinos possíveis:");
// console.log(salvador, saoPaulo, newYork );
console.log(listaDeDestinos);

const podeComprar = (
    idadeDoComprador >= 18 || // || = ou//
    pessoaEstaAcompanhada == true // se aqui for false vai mostrar que o comprador não é maior de idade
    );

let contador = 0;
while(contador<3){
    if(listaDeDestinos[contador] == destino){  
} else{
    console.log("Destino não existe");
}
    contador += 1;
}
