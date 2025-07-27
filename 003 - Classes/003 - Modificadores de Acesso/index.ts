
/**
 * protected: Acesso restrito à classe e suas subclasses.
 * private: Acesso restrito apenas à própria classe.
 * public: Acesso livre, disponível para qualquer parte do código.
 */

class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}.`;
    }

    protected fezAniversario() {
        this.idade++;
        return `Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`;
    }
}

const pessoa = new Pessoa("Carlos", 28);

pessoa.comer("pizza");
// pessoa.fezAniversario(); // Erro: 'fezAniversario'