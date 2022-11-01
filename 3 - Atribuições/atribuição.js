console.log("Trabalhando com atribuição de variáveis");

const idade = 24;
// const nome = "Sara"; // A variável const ela não aceita ser sobreescrita, não muda de valor, diferente do LET o LET aceita ser sobreescrita (como está abaixo)
let nome = "Sara";

const sobrenome = "Souza";
console.log(nome, sobrenome); //Se colocar sara + souza ele imprime SaraSouza

console.log(`Meu nome é ${nome} ${sobrenome}`);

const nomeCompleto = nome + sobrenome; // atribui ao nomeCompleto uma const então somente essa const tera esse valor 
console.log(nomeCompleto);

//LET - VARIÁEIS QUE REALMENTE VARIAM
//CONST - VARIÁVEIS QUE NÃO VARIAM

let iDade; //o D só está maiusculo pois estava dando erro com o idade = 24 acima. Declarando variável
iDade = 24; // atribuindo valor
iDade = iDade+1;
console.log(iDade);