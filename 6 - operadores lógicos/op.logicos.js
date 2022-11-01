console.log("Operadores lógicos");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `New York`
);

const idadeDoComprador = 18;
const pessoaEstaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, newYork );
console.log(listaDeDestinos);

if (
    idadeDoComprador >= 18 || // || = ou//
    pessoaEstaAcompanhada == true // se aqui for false vai mostrar que o comprador não é maior de idade
    
    ) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
        console.log("Comprador não é maior de idade. Favor não vender!"); //comprador menor de idade
    };

console.log("Embarque:\n\n ")    
if(idadeDoComprador >= 18 && temPassagemComprada ){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos); 