function produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
};

produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100)); 
};

produto.prototype.aumento = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new produto('camisa', 50);

const p2 = {
  nome: 'caneca',
  preco: 15
};

Object.setPrototypeOf(p2, produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);
