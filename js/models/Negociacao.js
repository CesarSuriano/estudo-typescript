System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                }
                get data() {
                    return this._data;
                }
                set data(value) {
                    this._data = value;
                }
                get quantidade() {
                    return this._quantidade;
                }
                set quantidade(value) {
                    this._quantidade = value;
                }
                get valor() {
                    return this._valor;
                }
                set valor(value) {
                    this._valor = value;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
