System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacao = new NegociacaoController_1.NegociacaoController();
            $('.form').submit(negociacao.adiciona.bind(negociacao));
            $('#botao-importa').click(negociacao.importaDados.bind(negociacao));
        }
    };
});
