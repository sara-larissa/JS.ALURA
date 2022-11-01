console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `New York`
);

const idadeDoComprador = 17;
const pessoaEstaAcompanhada = true;

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, newYork );
console.log(listaDeDestinos);

if(idadeDoComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo item
} else {
    //fazer verificação:
    if(pessoaEstaAcompanhada){
        console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1,1); //removendo item
} else{
        console.log("Comprador não é maior de idade. Favor não vender!"); //comprador menor de idade
}

};

console.log(listaDeDestinos); 