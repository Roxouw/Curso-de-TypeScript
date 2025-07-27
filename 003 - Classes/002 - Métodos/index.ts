class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}.`;
    }

    fezAniversario() {
        this.idade++;
        return `Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Maria", 25);
console.log(pessoa1.comer("maçã"));
console.log(pessoa1.fezAniversario());