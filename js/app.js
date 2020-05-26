const negociacao = new NegociacaoController();
$('form').submit(negociacao.adiciona.bind(negociacao));
