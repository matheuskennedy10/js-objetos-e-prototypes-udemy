function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('va se danar');
      }

      estoquePrivado = valor;
    }
  });
}

function criaProduto(nome) {
  return {
    get nome() {
    return nome;
   },
   set nome(valor) {
     valor = valor.replace('coisa', '');
     nome = valor;
   }
  };
}

//const p1 = new produto('camiseta', 20, 3);
//p1.estoque = 'o valor que eu quero';
//console.log(p1);
const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);