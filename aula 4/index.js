function pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = ( ) => this.nome + ' ' + this.sobrenome; 
}

const pessoa1 = new pessoa('luiz', 'o.');
const pessoa2 = new pessoa('maria', 'db');
const data = new Date();

console.log(pessoa1);
console.log(data);