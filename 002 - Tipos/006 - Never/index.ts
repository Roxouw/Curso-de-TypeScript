const error = (): never => {
    throw new Error('Algo deu errado');
};


const loop = (): never => {
    while (true) {
        console.log('Loop infinito');
    }
};

const validate = (value: any) => {
    if (typeof value === "string") {
        return console.log("É uma string");
    } else if (typeof value === "number") {
        return console.log("É um número");
    }
    console.log(error());
};

validate({nome: "João"});