const negociacao = new NegociacaoController()
document.querySelector('.form').addEventListener('submit', negociacao.adiciona.bind(negociacao))