import { Negociacao, INegociacaoParcial } from "../models/index";

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<void|Negociacao[]> {

        return fetch('http://localhost:8000')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: INegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log(err));

    }
}

export interface HandlerFunction {
    (res: Response): Response
}