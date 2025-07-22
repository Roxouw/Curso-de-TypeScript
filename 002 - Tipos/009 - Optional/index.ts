const fn = (nome: string, idade?: number) => {
    if (!idade) {  // Verifica se idade foi fornecida
        return `Nome: ${nome}, Idade: Sem valor definido`;
    }

    return `Nome: ${nome}, Idade: ${idade}`;

}

console.log(fn("João", 30)); // Nome: João, Idade: 30
console.log(fn("João")); // Nome: João