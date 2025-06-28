let array: [String, String, number, boolean] = ["Filipe Rosso", "Teste", 10, true];
let array2: Array<string  | number | boolean> = ["Filipe", "Rosso", 10, true];

console.log(array);
console.log(array2);

let obj1: {} = { nome: "Filipe Rosso", idade: 10, ativo: true };

let obj2: { nome: string, idade: number, ativo: boolean } = { nome: "Filipe Rosso", idade: 10, ativo: true };

let obj3: { 
  nome: string, 
  idade: number, 
  ativo: boolean 
} = { 
  nome: "Filipe Rosso", 
  idade: 10, 
  ativo: true 
};

 console.log(obj1);
 console.log(obj2);
  console.log(obj3);