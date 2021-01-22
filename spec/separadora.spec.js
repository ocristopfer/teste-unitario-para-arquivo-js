var instanciaSeparadora = require('../src/classSeparadora');


describe("O teste de separação do array", function () {
    //  var instanciaSeparadora;
    // beforeEach(() => {  })

    it("[3,2,1,6,0,5] com raiz 6", function () {
        instanciaSeparadora.funcaoSeparadora([3, 2, 1, 6, 0, 5], 6);
        expect(instanciaSeparadora.arrayEsquerdo).toEqual([3, 2, 1]);
        expect(instanciaSeparadora.arrayDireito).toEqual([5, 0]);
    });

    it("[7,5,13,9,1,6,4] com raiz 13", function () {
        instanciaSeparadora.funcaoSeparadora([7, 5, 13, 9, 1, 6, 4], 13);
        expect(instanciaSeparadora.arrayEsquerdo).toEqual([7, 5]);
        expect(instanciaSeparadora.arrayDireito).toEqual([9, 6, 4, 1]);
    });

    it("[7,5,13,9,1,6,4] com raiz 4 sendo a raiz o ultimo elemento do array", function () {
        instanciaSeparadora.funcaoSeparadora([7, 5, 13, 9, 1, 6, 4], 4);
        expect(instanciaSeparadora.arrayEsquerdo).toEqual([13, 9, 7, 6, 5, 1]);
        expect(instanciaSeparadora.arrayDireito).toEqual([]);
    });

    it("[7,5,13,9,1,6,4] com raiz 7 sendo a raiza o primeiro elemento do array", function () {
        instanciaSeparadora.funcaoSeparadora([7, 5, 13, 9, 1, 6, 4], 7);
        expect(instanciaSeparadora.arrayEsquerdo).toEqual([]);
        expect(instanciaSeparadora.arrayDireito).toEqual([13, 9, 6, 5, 4, 1]);
    });



});