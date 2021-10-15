import { Negociacoes, IImprimivel } from "../models/index"

export function Imprime(...negociacoes:IImprimivel[]) {
    negociacoes.forEach(negociacao => negociacao.paraTexto())
}