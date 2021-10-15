import { Negociacao } from "./Negociacao"
import { IImprimivel, IIgualavel } from "./index";

export class Negociacoes implements IImprimivel, IIgualavel<Negociacoes>{
    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto._negociacoes)
    }
    private _negociacoes: Array<Negociacao> = []

    adiciona(negocicao: Negociacao): void {
        this._negociacoes.push(negocicao)
    }

    getNegociacoes(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes)
    }

    paraTexto(): void {
        console.log('Impressão negociações:')
        console.log(this._negociacoes)
    }

    
}