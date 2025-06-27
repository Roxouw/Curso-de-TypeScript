// Typescript
// npm install -g typescript
// tsc --version
// tsc --init
// tsc --build
// plugin: Code Runner
// npm i -g ts-node
// ts-node index.ts
// ctrl + alt + n

console.log("Hello, World!");
console.log("This is a TypeScript project with CommonJS module system and ES2016 target.");
console.log("TypeScript version: 5.8.3");

const pedido = (pedido: string) => {
  return `Pedido: ${pedido}`;
};

console.log(pedido("123"));
// This function takes a pedido (order) and returns a string representation of it.
// The function is defined using an arrow function syntax.