System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                ehIgual(objeto) {
                    return this.data.getDate() == objeto.data.getDate() &&
                        this.data.getMonth() == objeto.data.getMonth() &&
                        this.data.getDay() == objeto.data.getDay();
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log(`
                Data: ${this.data},
                Quantidade: ${this.quantidade},
                Valor: ${this.valor},
                Volume: ${this.volume},
            `);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
