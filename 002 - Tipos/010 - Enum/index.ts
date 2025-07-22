enum EMes{
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}

const pessoa: { nome: string, idade: number, mesAniversario: EMes } = {
    nome: "João",
    idade: 30,
    mesAniversario: EMes.Janeiro
};

if (pessoa.mesAniversario === EMes.Janeiro) {
    console.log(`${pessoa.nome} faz aniversário em Janeiro.`);
}
// Exemplo de uso do enum
console.log(`O mês de aniversário de ${pessoa.nome} é ${EMes[pessoa.mesAniversario]}.`);