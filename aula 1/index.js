const pessoa1 = new Object();
pessoa1.nome = 'mateus';
pessoa1.sobrenome = 'otavio';
pessoa1.idade = 13;
pessoa1.falarNome = function () {
  return (`${this.nome} esta  falando seu nome`);
};
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());