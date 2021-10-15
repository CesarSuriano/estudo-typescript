System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                ehIgual(objeto) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(objeto._negociacoes);
                }
                adiciona(negocicao) {
                    this._negociacoes.push(negocicao);
                }
                getNegociacoes() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    console.log('Impressão negociações:');
                    console.log(this._negociacoes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
