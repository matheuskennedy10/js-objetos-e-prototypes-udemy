function produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
};
produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

function camiseta(nome, preco, cor) {
   produto.call(this, nome, preco);
};
camiseta.prototype = Object.create(produto.prototype);
camiseta.prototype.constructor = camiseta;

camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

function caneca(nome, preco, material, estoque) {
  produto.call(this, nome, preco);
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
 get: function() {
return estoque;
 },
set: function(valor) {
if(typeof valor !== 'number') return;
estoque = valor;
}
  });
}

caneca.prototype = Object.create(produto.prototype);
caneca.prototype.constructor = caneca;

const produto = new produto('Gen', 111);
const camisa = new camiseta('regata', 10.5, 'azul');
const caneca = new caneca('minha', 10, 'barro', 110);
caneca.estoque = 100;

console.log(caneca);
console.log(camiseta);

