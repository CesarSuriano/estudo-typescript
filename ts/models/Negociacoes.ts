import { Negociacao } from "./Negociacao"

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = []

    adiciona(negocicao: Negociacao): void {
        this._negociacoes.push(negocicao)
    }

    getNegociacoes(): Negociacao[] {
        return [].concat(this._negociacoes)
    }
}