import { Negociacoes, Negociacao, INegociacaoParcial } from '../models/index'
import { NegociacoesView, MensagemView } from '../views/index'
import { logarTempoDeExecucao, domInject } from '../helpers/decorators/index'
import { throttle } from '../helpers/decorators/throttle'
import { NegociacaoService } from '../services/index'
import { Imprime } from '../helpers/index'

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery

    @domInject('#quantidade')
    private _inputQuantidade: JQuery

    @domInject('#valor')
    private _inputValor: JQuery
    private _negociacoes = new Negociacoes()
    private _negociacoesView = new NegociacoesView('#negociacoesView')
    private _mensagemView = new MensagemView('#mensagemView')

    private _service = new NegociacaoService()

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    @throttle()
    adiciona(event: Event) {
        let data = new Date(this._inputData.val().replace(/-/g, ','))

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update("Somente negociações em dias uteis.");
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao)

        Imprime(negociacao, this._negociacoes)

        this._negociacoesView.update(this._negociacoes)
        this._mensagemView.update("Item adicionado")
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {
        this._service
            .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                }

                throw new Error(res.statusText)
            })
            .then(negociacoes => {
                if (negociacoes) {

                    const negociacoesJaImportadas = this._negociacoes.getNegociacoes();

                    negociacoes.filter(negociacao => !negociacoesJaImportadas.some(jaImportado => negociacao.ehIgual(jaImportado)))
                        .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                    this._negociacoesView.update(this._negociacoes)
                }
            })


    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}