class Separadora {
    constructor() {
        this.arrayEsquerdo;
        this.arrayDireito;
    }

    funcaoSeparadora(array, raiz) {
        var indiceRaiz = array.indexOf(raiz);
        if (indiceRaiz >= 0) {

            this.arrayEsquerdo = array.slice(0, indiceRaiz).sort((a,b)=>{
                return a < b;
            });
            this.arrayDireito = array.slice(indiceRaiz + 1, array.length).sort((a,b)=>{
                return a < b;
            });

        }
    }
}

// var instanciaSeparadora = new Separadora();
// instanciaSeparadora.funcaoSeparadora([7, 5, 13, 9, 1, 6, 4], 4);
// console.log(instanciaSeparadora.arrayEsquerdo, instanciaSeparadora.arrayDireito);
// instanciaSeparadora.funcaoSeparadora([7, 5, 13, 9, 1, 6, 4], 7);
// console.log(instanciaSeparadora.arrayEsquerdo, instanciaSeparadora.arrayDireito);
module.exports = new Separadora();