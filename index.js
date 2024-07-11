
//implementação objeto pessoa
const pessoa = {
    nome: '',
    idade: '',
    hobbies: [],
    adicionarHobby: (str) => pessoa.hobbies.push(str) //metodo adicionarHobby
}

const pessoas = [
  { nome: 'João', idade: 25, hobbies: ['ler', ' correr'] },
  { nome: 'Maria', idade: 30, hobbies: ['cozinhar', ' dançar'] },
  { nome: 'Ana', idade: 28, hobbies: ['nadar', ' pintar'] }
];

pessoa.adicionarHobby('cavucar') // executando metodo adicionarHobby do objeto pessoa

//implementação da função saudação
function saudacao(array, indice){
    console.log(`Olá eu sou o ${array[indice].nome}, tenho a idade de ${array[indice].idade} anos e meus hobbies são ${array[indice].hobbies}`);
}
saudacao(pessoas, 0) //execução da função saudação

// Função para calcular a média de idades
function calcularMediaIdade(array){
    let somaIdades = 0
    let mediaIdades = 0
    for(let i=0; i<array.length; i++){
        somaIdades+=array[i].idade
    }
    mediaIdades = somaIdades / (array.length + 1)
    console.log(mediaIdades);
}

calcularMediaIdade(pessoas) //execução da função calcularMediaIdade