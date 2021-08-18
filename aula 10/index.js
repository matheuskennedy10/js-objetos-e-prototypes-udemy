const pessoas = [
  {id: 3, nome: 'sammara'},
  {id: 2, nome: 'mateus'},
  {id: 1, nome: 'sara'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id, {...pessoa});
}