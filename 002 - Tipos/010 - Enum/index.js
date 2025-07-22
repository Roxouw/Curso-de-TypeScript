var EMes;
(function (EMes) {
    EMes[EMes["Janeiro"] = 0] = "Janeiro";
    EMes[EMes["Fevereiro"] = 1] = "Fevereiro";
    EMes[EMes["Mar\u00E7o"] = 2] = "Mar\u00E7o";
    EMes[EMes["Abril"] = 3] = "Abril";
    EMes[EMes["Maio"] = 4] = "Maio";
    EMes[EMes["Junho"] = 5] = "Junho";
    EMes[EMes["Julho"] = 6] = "Julho";
    EMes[EMes["Agosto"] = 7] = "Agosto";
    EMes[EMes["Setembro"] = 8] = "Setembro";
    EMes[EMes["Outubro"] = 9] = "Outubro";
    EMes[EMes["Novembro"] = 10] = "Novembro";
    EMes[EMes["Dezembro"] = 11] = "Dezembro";
})(EMes || (EMes = {}));
var pessoa = {
    nome: "João",
    idade: 30,
    mesAniversario: EMes.Janeiro
};
if (pessoa.mesAniversario === EMes.Janeiro) {
    console.log("".concat(pessoa.nome, " faz anivers\u00E1rio em Janeiro."));
}
// Exemplo de uso do enum
console.log("O m\u00EAs de anivers\u00E1rio de ".concat(pessoa.nome, " \u00E9 ").concat(EMes[pessoa.mesAniversario], "."));
