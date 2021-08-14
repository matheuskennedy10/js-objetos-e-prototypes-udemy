function pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new pessoa('mateus', 'kennedy');
p1.pessoa = 'outra coisa';
const p2 = new pessoa('maria', 'miranda');
console.log(p1);